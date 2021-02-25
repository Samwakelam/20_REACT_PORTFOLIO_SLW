import './AboutPanel.css'

import { NavLink } from "react-router-dom";

const AboutPanel = ({page, onTogglePage, onTogglePopout}) => {

  const togglePage = () => {
    onTogglePage('aboutPage');
  }

  const togglePopout = (event) => {
    console.log('About panel, togglePopout, selected =', event.target.previousSibling.dataset.popout);
    const popout = event.target.previousSibling.dataset.popout;
    onTogglePopout(popout);
  }

  return (
    <div className='nav-pane' id='about-nav'>
      <div id='item-a' className='nav-item-sml'>
        <img
          className='symbol'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/Paint-brush.png`}
          alt='paint brush'
          data-popout='skills'
        />
        <NavLink className='side-link-text' to='/about/skills' onClick={togglePopout}>Skills</NavLink>
      </div>

      <div id='item-b' className='nav-item-bg'>
        { page === 'aboutPage' ? (
          <img id='sam-photo' src={`${process.env.PUBLIC_URL}/assets/img/sam.jpg`} alt='Sam'/>
        ) : (
          <NavLink className='main-link-text' to='/' onClick={togglePage} >About Sam</NavLink>
        ) }
      </div>

      <div id='item-c' className='nav-item-sml spots'>

      </div>
        
      <div id='item-d' className='nav-item-sml'>
      <NavLink className='link-symbol' to='/about/education'>
        <div data-popout='education'></div>
          <img
            className='symbol'
            src={`${process.env.PUBLIC_URL}/assets/img/symbols/university-clear.png`}
            alt='University cap'
            onClick={togglePopout}
          />
        </NavLink>
      </div>
      
    </div>
  )
}

export default AboutPanel;