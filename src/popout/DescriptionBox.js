import './DescriptionBox.css';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';

// content
import ProjectDescription from '../content/ProjectDescription';

const DescriptionBox = ({selected, location}) => {

  console.log({selected, location});
  return (
    <div id='description-box-popout' className='popout' data-popout='description' style={location}>
      <Header/>
      <div className='container'>
        <ProjectDescription projectCode={selected} />
      </div>
      <Footer />
      
    </div>
  )
}

export default DescriptionBox;