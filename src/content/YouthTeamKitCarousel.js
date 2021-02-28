// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  './CarouselStyle.css';

const YouthTeamCarousel = () => {

  return (
    <Carousel className="carousel-style" showStatus={false} autoPlay infiniteLoop width='100%'>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/yTeam_Jump.jpg`}
              alt='YouthTeam Jumpers'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/yTeam_tShirt.jpg`}
              alt='YouthTeam Tshirts'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
    </Carousel>
);

}

export default YouthTeamCarousel;