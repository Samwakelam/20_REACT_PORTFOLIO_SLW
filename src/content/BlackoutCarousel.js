// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, autoplay, dynamicHeight } from 'react-responsive-carousel';

const BlackoutCarousel = () => {

  return (
    <Carousel className="carousel-style" showStatus={false} autoPlay infiniteLoop width='100%'>
        <div key='bOut_2019T'>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/bOut_2019T.jpg`}
              alt='blackout 2019 t shirt'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div key='bOut_2018T'>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/bOut_2018T.jpg`}
              alt='blackout 2018 t shirt'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div key='bOut_staffT'>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/bOut_staffT.jpg`}
              alt='blackout Staff t shirt'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div key='bOut_conceptT'>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/bOut_conceptT.jpg`}
              alt='blackout concept t shirt'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
    </Carousel>
);

}

export default BlackoutCarousel;