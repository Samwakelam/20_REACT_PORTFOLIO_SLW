import { useContext, useEffect } from 'react';
import SiteContext from "../SiteContext";
// styles
import './AboutPage.css'
// content
import AboutPageIntro from '../content/AboutPageIntro';


const AboutPage = ({location}) => {
  const { handleSiteLocation } = useContext(SiteContext);

  // console.log(location);
 useEffect(() => {
   const handleLocation = () => {
     console.log('location.pathname =', location.pathname);
     if(!location.pathname){
       handleSiteLocation(location.pathname);
     }
   }
   handleLocation();

 },[]);

  return (
    <article id='main-about-page' className='container' >
      <h1>About Sam</h1>
      <AboutPageIntro />
    </article>
  )
}

export default AboutPage; 