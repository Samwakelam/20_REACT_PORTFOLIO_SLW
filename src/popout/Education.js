import './Education.css';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';

const Education = ({closePopout}) => {
  return (
    <div id='education-popout' className='popout' data-popout='education'>
      <Header closePopout={closePopout}/>
      Education 
      <Footer />
    </div>
  )
}

export default Education ;