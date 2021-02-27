import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import SiteContext from "../SiteContext";
// styles
import './WebDesignPanel.css'


const WebDesignPanel = () => {

  const { siteLocation } = useContext(SiteContext);

  return (
    <div className='nav-pane' id='web-design-nav'>

      <div id='item-g' className='nav-item'>
        {siteLocation === '/web-design' ? (
            <img id='coding-sam' src={`${process.env.PUBLIC_URL}/assets/img/coding-sam.png`} alt='coding sam drawing'/>
          ) : (
            <div>
              <NavLink className='main-link-text text-centre' to='/web-design'> Web Design </NavLink> <br/>
              <div>
                <img className='symbol' src={`${process.env.PUBLIC_URL}/assets/img/symbols/html.png`} alt ='html'/>
                <img className='symbol' src={`${process.env.PUBLIC_URL}/assets/img/symbols/css.png`} alt ='css'/>
                <img className='symbol' src={`${process.env.PUBLIC_URL}/assets/img/symbols/javascript.png`} alt ='javascript'/>
              </div>
            </div>
          ) }
        
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