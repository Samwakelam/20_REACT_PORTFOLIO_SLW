// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const FinalProjectCarousel = () => {

  return (
    <Carousel className="carousel-style" showStatus={false} autoPlay infiniteLoop width='100%'>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/Outfit_Skirt.jpg`}
              alt='outfit-skirt'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/Outfit_Dress.jpg`}
              alt='outfit-Dress'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/Outfit_Coat.jpg`}
              alt='outfit-coat'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/Outfirt_Jacket.jpg`}
              alt='outfit-Jacket'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/fashion/Outfit_White.jpg`}
              alt='outfit-White'
            />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        
    </Carousel>
);

}

export default FinalProjectCarousel;