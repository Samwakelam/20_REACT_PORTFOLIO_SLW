
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SeasonalTrendCarousel = () => {

  return (
    <Carousel className="carousel-style" showStatus={false} autoPlay infiniteLoop width='100%'>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/IndoorGarden.jpg`}
              alt='Indoor Garden trend board example'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/RattanAndCane.jpg`}
              alt='Rattan and Cane Trend board example'
            />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        
    </Carousel>
);

}

export default SeasonalTrendCarousel;