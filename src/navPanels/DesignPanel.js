import './DesignPanel.css'

import { NavLink } from "react-router-dom";

const DesignPanel = ({}) => {

  // console.log('page =', page, page === 'aboutPage');

  return (
    <div className='nav-pane'>
      <NavLink to='/design-history' > Design history</NavLink>
    </div>
  )

}

export default DesignPanel;