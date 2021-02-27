// styles
import './DesignPage.css';
// hooks
import useSiteLocation from '../hooks/useSiteLocation';


const DesignPage = ({location}) => {

  console.log(location);

  useSiteLocation(location);

  return (
    <article id='design-history-page' className='container'>
      <h1>Design History</h1>
    </article>
  )
}

export default DesignPage; 