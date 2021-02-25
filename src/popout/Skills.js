import './Skills.css';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';

const Skills = ({closePopout}) => {
  return (
    <div id='skills-popout' className='popout' data-popout='skills'>
      <Header closePopout={closePopout}/>
      Skills
      <Footer />
    </div>
  )
}

export default Skills ;