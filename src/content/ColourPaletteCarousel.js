
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ColourPalleteCarousel = () => {

  return (
    <Carousel className="carousel-style" showStatus={false} autoPlay infiniteLoop width='100%'>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/colPal_Classic.jpg`}
              alt='classic colour pallette mood board example'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/colPal_Dark.jpg`}
              alt='dark colour pallette mood board example'
            />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/colPal_Neut.jpg`}
              alt='neutral colour pallette mood board example'
            />
            {/* <p className="legend">Legend 3</p> */}
        </div>
    </Carousel>
);

}

export default ColourPalleteCarousel;