import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true} // Enable auto-play
      interval={1000} // Set the interval to 1 second (1000 milliseconds)
      infiniteLoop={true} // Enable infinite loop
    >
      <div className='w-[80%] mx-auto'>
        <img src="https://assets-global.website-files.com/5ff1b99d0642837fd77d935d/61a5e5e3d2451b69a4d6f9c1_India%20vegetables.jpg" alt="Fresh vegetables at the local online market" />
        <p className="legend">Local Vegetable Market</p>
      </div>
      <div>
        <img src="https://ausveg.com.au/app/uploads/2020/09/iStock_000010669704Large-scaled.jpg" alt="Variety of vegetables at the local market" />
        <p className="legend">Fresh Produce Market</p>
      </div>
      <div>
        <img src="https://cookieandkate.com/images/2015/02/tel-aviv-8.jpg" alt="Fruits and vegetables at the market" />
        <p className="legend">Local Market Display</p>
      </div>
      <div>
        <img src="https://i.ytimg.com/vi/cfEPzU2A2n0/maxresdefault.jpg" alt="Local produce at the online market" />
        <p className="legend">Farmers Market</p>
      </div>
      <div>
        <img src="https://th-thumbnailer.cdn-si-edu.com/mCG92uYzgUz4bPkk8cbREU5sHdI=/800x600/filters:no_upscale()/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/4c965290fcd22bda57b4f69b9bb8ce51f7606bdf.jpg" alt="Fresh produce at the market" />
        <p className="legend">Local Food Bazaar</p>
      </div>
      <div>
        <img src="https://www.phoenixmag.com/wp-content/uploads/2019/11/AdobeStock_181048078-1280x854.jpeg" alt="Local market with fresh produce" />
        <p className="legend">Farmers Market Stall</p>
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
