// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ScandinavianHomeCarousel = () => {

  return (
    <Carousel className="carousel-style" showStatus={false} autoPlay infiniteLoop width='100%'>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/scandDes_mood.jpg`}
              alt='scandinavian home mood board'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/scandDes_hall.jpg`}
              alt='scandinavian home hall design'
            />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/scandDes_liv.jpg`}
              alt='scandinavian home living room design'
            />
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/scandDes_kitch.jpg`}
              alt='scandinavian home kitchen design'
            />
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/scandDes_Dine.jpg`}
              alt='scandinavian home dining room design'
            />
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/Interior/scandDes_bed.jpg`}
              alt='scandinavian home bedroom design'
            />
            {/* <p className="legend">Legend 3</p> */}
        </div>
    </Carousel>
);

}

export default ScandinavianHomeCarousel;