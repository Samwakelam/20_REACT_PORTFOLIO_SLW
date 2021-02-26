import './WebDesignPanel.css'

import { NavLink } from "react-router-dom";

const WebDesignPanel = ({page, onTogglePage}) => {

  // console.log('page =', page, page === 'aboutPage');

  const togglePage = () => {
    onTogglePage('webDesignPage');
  }

  return (
    <div className='nav-pane' id='web-design-nav'>

      <div id='item-g' className='nav-item'>
        <NavLink className='main-link-text' to='/web-design' onClick={togglePage}> Web Design </NavLink>
      </div>

      <div id='item-h' className='nav-item'>
        <img
          className='symbol'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/github-clear.png`}
          alt='Git hub logo'
          // onClick={togglePopout}
        />
        <a id='github-profile' className='side-link-text text-centre' rel="noreferrer" href='https://github.com/Samwakelam' target='_blank' > Git Hub </a>
      </div>
      <div id='item-i' className='nav-item spots'>
        
      </div>
      
    </div>
  )

}

export default WebDesignPanel;