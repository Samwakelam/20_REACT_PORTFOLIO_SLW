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

      <div id='contact-details'>
        <h2>Contact Details</h2>

        <div className="paragraph-details">
          <img
            alt="Email"
            className="symbol margin-6"
            src={`${process.env.PUBLIC_URL}/assets/img/symbols/Email.png`}
          />
          <p className='inline-block'>sam.wakelam@hotmail.com</p>
        </div>

        <div className="paragraph-details">
          <img
            alt="Address"
            className="symbol margin-6"
            src={`${process.env.PUBLIC_URL}/assets/img/symbols/address.png`}
          />
          <p className='inline-block'>Worcestershire</p>
        </div>

        <div className="paragraph-details">
          <img
            alt="Linkedin"
            className="symbol margin-6"
            src={`${process.env.PUBLIC_URL}/assets/img/symbols/Linked-In.png`}
          />
          <p className='inline-block'>
            Find me on linkedIn:<br />
            <a
              target="_blank"
              className="detail-link"
              href="https://www.linkedin.com/in/samantha-wakelam-b41a8748/"
            >Samantha Wakelam</a
            >
          </p>
        </div>

        <div className="paragraph-details">
          <img
            alt="Github"
            className="symbol margin-6"
            src={`${process.env.PUBLIC_URL}/assets/img/symbols/github.png`}
          />
          <p className='inline-block'>
            Find me on Github:<br />
            <a
              target="_blank"
              className="detail-link"
              href="https://github.com/Samwakelam"
            >Samwakelam</a
            >
          </p>
        </div>

        <div className="paragraph-details">
          <img
            alt="Telephone"
            className="symbol margin-6"
            src={`${process.env.PUBLIC_URL}/assets/img/symbols/telephone.png`}
          />
          <p className='inline-block'>07710 550 583</p>
        </div>

      </div>
    </article>
  )
}

export default AboutPage; 