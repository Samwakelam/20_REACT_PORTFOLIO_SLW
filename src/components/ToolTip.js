import './components.css';

import React, { useState } from 'react';
import {Manager, Reference, Popper} from 'react-popper';

const ToolTip = ({name, children}) => {
  
  const [showElement, setShowElement] = useState(false);

  return (
    <Manager>

      <Reference>
        {({ ref }) => (
          <button
            type="button"
            ref={ref}
            aria-describedby="tooltip"
            onMouseOver={() => {
              setShowElement(true);
            }}
            onMouseOut={() => {
              setShowElement(false);
            }}
          >
            <img
              className='symbol'
              src={`${process.env.PUBLIC_URL}/assets/img/symbols/${name}.png`}
              alt='SkecthUp'
              data-popper='sketchup'
            />
          </button>
        )}
      </Reference>

      {showElement ? (
        <Popper placement="right">
          {({ ref, style, placement,}) => (
            <div ref={ref} style={style} >
              <div className="tooltip" role="tooltip" data-popper-placement={placement}>
                {children}
                <div className="arrow" data-popper-arrow></div>
              </div>
              
            </div>
          )}
        </Popper>
      ) : null}

    </Manager>
  );
}

export default ToolTip ;