// styles
import './AboutPage.css'
// content
import AboutPageIntro from '../content/AboutPageIntro';
// hooks
import useSiteLocation from '../hooks/useSiteLocation';


const AboutPage = ({ location }) => {

  useSiteLocation(location)

  return (
    <article id='main-about-page' className='container' >
      <h1>About Sam</h1>
      <AboutPageIntro />
    </article>
  )
}

export default AboutPage; 