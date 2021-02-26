import './AboutPage.css'

// content
import AboutPageIntro from '../content/AboutPageIntro';

const AboutPage = () => {
  return (
    <article id='main-about-page' className='container'>
      <h1>About Sam</h1>
      <AboutPageIntro />
    </article>
  )
}

export default AboutPage; 