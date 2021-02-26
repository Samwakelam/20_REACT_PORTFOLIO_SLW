import { useContext } from 'react';
import SiteContext from "../SiteContext";
// styles
import './DesignPage.css';


const DesignPage = ({location}) => {
  const { handleSiteLocation } = useContext(SiteContext);

  console.log(location);

  const handleLocation = () => {
    handleSiteLocation(location.pathname);
  }
  handleLocation();

  return (
    <article id='design-history-page' className='container'>
      <h1>Design History</h1>
    </article>
  )
}

export default DesignPage; 