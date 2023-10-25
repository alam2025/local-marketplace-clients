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
import { SliderComponent } from './SliderComponent';


const Home = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
      return (
            <div >
                  <SliderComponent></SliderComponent>
                  {/* <DemoCarousel/> */}
                  {/* <Banner></Banner> */}

                  <section className='flex justify-between items-center m-3'>
                        <div className="dropdown w-[30%]">
                              <label
                                    tabIndex={0}
                                    className="btn m-1"
                                   
                              >
                                    সব ক্যাটাগরি
                              </label>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li class="menu-title"><a>সবজি (Vegetables)</a></li>
                                    <ul class="menu">
                                          <li><a>পটল (Pointed Gourd)</a></li>
                                          <li><a>বেগুন (Eggplant)</a></li>
                                          <li><a>পালং শাক (Spinach)</a></li>

                                    </ul>

                                    <li class="menu-title"><a>মাছ (Fish)</a></li>
                                    <ul class="menu">
                                          <li><a>ইlish (Hilsa Fish)</a></li>
                                          <li><a>পুঁটি (Prawn)</a></li>
                                          <li><a>রুই (Rohu Fish)</a></li>

                                    </ul>

                                    <li class="menu-title"><a>ফল (Fruits)</a></li>
                                    <ul class="menu">
                                          <li><a>আঙ্গুর (Grapes)</a></li>
                                          <li><a>আপেল (Apple)</a></li>
                                          <li><a>আম (Mango)</a></li>

                                    </ul>
                              </ul>

                        </div>
                        <div>
  <p className="text-2xl text-gray-600">
    স্থানীয় এবং তাজা সবজি-ফলের এক দুর্গম জগতে ভ্রমণ করুন
  </p>
  <p className="text-lg text-gray-600 mt-2">
    আমাদের অনুসন্ধান করুন এবং বাংলাদেশের সর্বশ্রেষ্ঠ সবজি-ফলের বাজার আবিষ্কার করুন।
  </p>
  <p className="text-lg text-gray-600 mt-2">
    তৃতীয়পক্ষে আমাদের সার্বিক পুষ্টির সবজি-ফল পৌঁছানো বাজারে আপনার নিকটবর্তী কৃষকের উৎপাদন পর্যালোচনা করুন।
  </p>
</div>


                  </section>
                  <SpecialServices></SpecialServices>
                  <PopularClasses />
                  <WhyWeLearn />
                  <CompanyCourses />
                  <FeaturedInstructors></FeaturedInstructors>
                  <Pricing></Pricing>
                  <div className=' bg-slate-100 shadow-lg mb-24 py-16'><Instragram></Instragram></div>
                  <PeopleSay />
                  <Subscribe />d

            </div>
      );
};

export default Home;