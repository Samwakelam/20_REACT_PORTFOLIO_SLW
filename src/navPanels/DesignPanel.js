import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import SiteContext from "../SiteContext";
// styles
import './DesignPanel.css'


const DesignPanel = () => {

  const { siteLocation } = useContext(SiteContext);

  return (
    <div className='nav-pane' id='design-nav'>
      <div id='item-j'>
        { siteLocation === '/design-history'
          ? (
            <img 
                id='fashion-skirt'
                src={`${process.env.PUBLIC_URL}/assets/img/fashion/Outfit_Skirt.jpg`}
                alt='fashion outfits'
              />
            )
          : (
            <>
            <NavLink to='/design-history' className='main-link-text text-centre' > Design history</NavLink>
              <img 
                id='fashion'
                src={`${process.env.PUBLIC_URL}/assets/img/fashion/Outfit_two.png`}
                alt='fashion outfits'
              />
            </>
          )
        }
        
      </div>
      <div id='item-k'>
        <img 
          className='symbol'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/redPoint-clear.png`}
          alt='redpoint'
        />
      </div>

      <div id='item-l'>
        <img 
          className='symbol'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/pencil.png`}
          alt='Pencil'
        />
      </div>

      <div id='item-m' className='spots'></div>

      
    </div>
  )

}

export default DesignPanel;

