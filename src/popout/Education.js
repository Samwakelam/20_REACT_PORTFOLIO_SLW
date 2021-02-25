import './Education.css';
import {useState} from 'react';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';

// content
import UniName from '../content/UniNames';
import UniDescription from '../content/UniDescription';

const Education = ({ closePopout }) => {

  const [uniSelection, setUniSelection] = useState('brum');

  const handleSelection = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const name = event.target.dataset.uni;
    // console.log('name =', name); 
    setUniSelection(name);
  }

  const handleColourImage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // console.log('event.target.src',event.target.src);
    const name = event.target.dataset.uni; 
    event.target.src = `${process.env.PUBLIC_URL}/assets/img/symbols/${name}-col.png`
  }

  const handleBWImage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // console.log('event.target.src',event.target.src);
    const name = event.target.dataset.uni; 
    event.target.src = `${process.env.PUBLIC_URL}/assets/img/symbols/${name}-bw.png`
  }

  
  return (
    <div id='education-popout' className='popout' data-popout='education'>
      <Header closePopout={closePopout} />
      <div className='container' >
        
        <h2 className='text-centre'>Education</h2>

        <div id='education-content'>

          <div id='logo-a' className='uni-logo-sml'>
            <img
              className = 'symbol'
              src = {`${process.env.PUBLIC_URL}/assets/img/symbols/brum-bw.png`}
              alt = 'Birmingham University'
              data-uni = 'brum'
              onClick = {handleSelection}
              onMouseOver = {handleColourImage}
              onMouseOut = {handleBWImage}
            />
          </div>

          <div id='logo-b' className='uni-logo-sml'>
            <img
              className = 'symbol'
              src = {`${process.env.PUBLIC_URL}/assets/img/symbols/wolves-bw.png`}
              alt = 'Wolverhampton University'
              data-uni = 'wolves'
              onClick = {handleSelection}
              onMouseOver = {handleColourImage}
              onMouseOut = {handleBWImage}
            />
          </div>

          <div id='logo-c' className='uni-logo-sml'>
            <img
              className = 'symbol'
              src = {`${process.env.PUBLIC_URL}/assets/img/symbols/notts-bw.png`}
              alt = 'Nottingham Trent University'
              data-uni = 'notts'
              onClick = {handleSelection}
              onMouseOver = {handleColourImage}
              onMouseOut = {handleBWImage}
            />
          </div>

          <div id='logo-d' className='uni-logo-sml'>
            <img
              className = 'symbol'
              src = {`${process.env.PUBLIC_URL}/assets/img/symbols/stour-bw.png`}
              alt = 'Stourbridge College'
              data-uni = 'stour'
              onClick = {handleSelection}
              onMouseOver = {handleColourImage}
              onMouseOut = {handleBWImage}
            />
          </div>

          <div id='logo-e' className='uni-logo-sml'>
            <img
              className = 'symbol'
              src = {`${process.env.PUBLIC_URL}/assets/img/symbols/worce-bw.png`}
              alt = 'Worcester Sixth Form'
              data-uni = 'worce'
              onClick = {handleSelection}
              onMouseOver = {handleColourImage}
              onMouseOut = {handleBWImage}
            />
          </div>

          <div id='item-e'><UniName name = {uniSelection} /></div>
          <div id='item-f'><UniDescription name = {uniSelection} /></div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Education;