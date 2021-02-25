import './DesignPanel.css'

import { NavLink } from "react-router-dom";

const DesignPanel = ({page, onTogglePage}) => {

  // console.log('page =', page, page === 'aboutPage');

  const togglePage = () => {
    onTogglePage('designPage');
  }

  return (
    <div className='nav-pane'>
      <NavLink to='/design' onClick={togglePage}> Design </NavLink>
    </div>
  )

}

export default DesignPanel;