import './WebDesignPanel.css'

import { NavLink } from "react-router-dom";

const WebDesignPanel = ({page, onTogglePage}) => {

  // console.log('page =', page, page === 'aboutPage');

  const togglePage = () => {
    onTogglePage('webDesignPage');
  }

  return (
    <div className='nav-pane'>
      <NavLink to='/web-design' onClick={togglePage}> Web Design </NavLink>
    </div>
  )

}

export default WebDesignPanel;