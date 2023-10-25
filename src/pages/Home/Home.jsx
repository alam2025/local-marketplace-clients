import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses/PopularClasses';
import FeaturedInstructors from './FeaturedInstructors/FeaturedInstructors';
import SpecialServices from './Dialog/SpecialServices';
import Pricing from './Pricing/Pricing';
import Instragram from './Instragram/Instragram';
import { useContext } from 'react';
import { ThemeContext } from '../../provider/ThemeProvider';
import WhyWeLearn from './WhyWeLearn/WhyWeLearn';
import CompanyCourses from '../CompanyCourses/CompanyCourses';
import PeopleSay from './PeopleSay/PeopleSay';
import Subscribe from './Subscribe/Subscribe';
import DemoCarousel from './Slider/DemoCarousel';


const Home = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
      return (
            <div >
                 <DemoCarousel/>
                  {/* <Banner></Banner> */}

                  <SpecialServices></SpecialServices>
                  <PopularClasses />
                  <WhyWeLearn />
                  <CompanyCourses />
                  <FeaturedInstructors></FeaturedInstructors>
                  <Pricing></Pricing>
                  <div className=' bg-slate-100 shadow-lg mb-24 py-16'><Instragram></Instragram></div>
                  <PeopleSay />
                  <Subscribe />

            </div>
      );
};

export default Home;