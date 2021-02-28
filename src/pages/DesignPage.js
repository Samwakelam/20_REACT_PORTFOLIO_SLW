// styles
import './DesignPage.css';
// hooks
import useSiteLocation from '../hooks/useSiteLocation';
// content
import ColourPalleteCarousel from '../content/ColourPaletteCarousel';
import SeasonalTrendCarousel from '../content/SeasonalTrendCarousel';
import ScandinavianHomeCarousel from '../content/ScandinavianHomeCarousel';
import FinalProjectCarousel from '../content/FinalProjectCarousel';
import YouthTeamKitCarousel from '../content/YouthTeamKitCarousel';
import BlackoutCarousel from '../content/BlackoutCarousel';



const DesignPage = ({ location }) => {

  console.log(location);

  useSiteLocation(location);

  return (
    <article id='design-history-page' className='container'>
      <h1>Design History</h1>

      <div className='design-section'>
        <h2>Interior Design</h2>
        <div className='container slider-container'>
          <h3>Colour Pallete Moodboards:</h3>
          <ColourPalleteCarousel />
          <p className='project-description'>
            Colour palettes are a great way to describe the project style design and feel to a client.
            Here are three real world examples that I have used for clients in industry.
            It is a good fast sampler to agree with and gage the client’s personal style.
            </p>
          <h3>Seasonal Trend Boards:</h3>
          <SeasonalTrendCarousel />
          <h3>Scandinavian Home:</h3>
          <ScandinavianHomeCarousel />
          <p className='project-description'>
            This Scandinavian design is fresh young and based on this season’s trend.
            The scheme started with the mood board colour palette which has been referenced
            through the full home design. A neutral palette with bold black accents help to ground
            the palette.
            </p>
        </div>
      </div>

      <div className='design-section'>
        <h2>Fashion Design</h2>
        <div className='container slider-container'>
          <h3>Fashion Portfolio</h3>
          <FinalProjectCarousel />
          <h3>Description</h3>
          <div className='project-description'>
            <p>
              This collection is my final major project from the Nottingham Trent University
              and is based on science in fashion, primarily fluid dynamics.
              I was one of 30 students from a group of 100 to be chosen to display their
              work at the graduate fashion week catwalk.
            </p>
            <p>
              My unique selling point is intricate pattern cutting which changes
              the fabric direction from the top to the bottom of a single pleat disguising
              the transition and following the bodies flow lines. Fabrics have been chosen for their
              fluidity and structure to simulate fluids and the mechanics that are designed around them.
            </p>
            <p>
              My dissertation has been written on the use of science in fashion and explores how one
              can inspire the other. It complements the garment collection of 6 outfits although 5 are shown
              here. For my full degree I achieved a 1st class honors.
            </p>
            <p >
              During the course I participated in a number of extra curricular competitions
              making it to the semi final of the George at Asda capsule collection, displayed at
              Graduate fashion week in my second year.
            </p>
          </div>

        </div>
      </div>

      <div className='design-section'>
        <h2>Commissioned Design</h2>
        <div className='container slider-container'>
          <h3>Youth Team Kit:</h3>
          <YouthTeamKitCarousel />
          <h3>Blackout Annual Party:</h3>
          <BlackoutCarousel />
          <p className='project-description'>
            The local climbing centre commissioned a number of t-shirt collections from me.
            The first was their youth team uniform and the second two years running where the event
            t-shirts for their Blackout rave party.
            The colours were printed in glow-in-the-dark inks.
          </p>
        </div>
      </div>
    </article>
  )
}

export default DesignPage; 