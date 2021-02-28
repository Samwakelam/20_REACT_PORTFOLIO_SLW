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

      <div className='design-section'>
       <h2>Interior Design</h2>
       <div className='container'>
        <h3>Colour Pallete Moodboards:</h3>
        <h3>Seasonal Trend Boards:</h3>
        <h3>Scandinavian Home:</h3>
       </div>
      </div>

      <div className='design-section'>
       <h2>Fashion Design</h2>
       <div className='container'>
       <h3>Fashion Portfolio</h3>
        <h3>Description</h3>
       </div>
      </div>

      <div className='design-section'>
        <h2>Commissioned Design</h2>
        <div className='container'>
        <h3>Youth Team Kit:</h3>
        <h3>Blackout Anual Party:</h3>
       </div>
      </div>
    </article>
  )
}

export default DesignPage; 