import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import SiteContext from "../SiteContext";
// styles
import './AboutPanel.css'


const AboutPanel = ({onTogglePopout}) => {

  const { siteLocation } = useContext(SiteContext);

  const togglePopout = (event) => {
    // console.log('About panel, togglePopout, selected =', event.target.previousSibling.dataset.popout);
    const popout = event.target.previousSibling.dataset.popout;
    onTogglePopout(popout);
  }

  return (
    <div className='nav-pane' id='about-nav'>

      <div id='item-a' className='nav-item'>
        <img
          className='symbol'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/paintbrush.png`}
          alt='paint brush'
          data-popout='skills'
        />
        <NavLink className='side-link-text' to='/' onClick={togglePopout}>Skills</NavLink>
      </div>

      <div id='item-b' className='nav-item spots'></div>
        
      <div id='item-c' className='nav-item'>
        <NavLink to='/'>
          <div data-popout='education'></div>
          <img
            className='symbol'
            src={`${process.env.PUBLIC_URL}/assets/img/symbols/university-clear.png`}
            alt='University cap'
            onClick={togglePopout}
          />
        </NavLink>
      </div>

      <div id='item-d' className='nav-item'>
        {siteLocation === '/' ? (
          <img id='sam-photo' src={`${process.env.PUBLIC_URL}/assets/img/sam.jpg`} alt='Sam'/>
        ) : (
          <div>
          <NavLink className='main-link-text' to='/' >About Sam</NavLink>
          <img id='sam-logo' src={`${process.env.PUBLIC_URL}/assets/img/logo-clear.png`} alt ='logo-sam'/>
          </div>
        ) }
      </div>
      
    </div>
  )
}

export default AboutPanel;