import React, { useState } from 'react';
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
import Vagitables from './Vagitables/Vagitables';
import Email from './Email/Email';


const Home = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
      const [isHovered, setIsHovered] = useState(false);

      const handleMouseEnter = () => {
            setIsHovered(true);
      };

      const handleMouseLeave = () => {
            setIsHovered(false);
      };
      return (
            <div >
                  <SliderComponent></SliderComponent>
                  {/* <DemoCarousel/> */}
                  {/* <Banner></Banner> */}



                  <section className='flex justify-between  m-3'>
                        <div className="dropdown w-[30%]" style={{
                              backgroundImage: 'url("https://wallpaperaccess.com/full/735728.jpg")',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              height: '100vh',
                              textAlign: 'center'
                        }}>
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
                        <div
                              style={{
                                    backgroundImage: 'url("https://www.wallpaperup.com/uploads/wallpapers/2013/02/15/40496/4454d6e36ca93f4bda3bac2dfab8ed7e.jpg")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    height: '100vh',
                                    textAlign: 'center'
                              }}
                        >
                              <p className="text-2xl text-white text-center">
                                    স্থানীয় এবং তাজা সবজি-ফলের এক দুর্গম জগতে ভ্রমণ করুন
                              </p>
                              <p className="text-lg text-white mt-2">
                                    আমাদের অনুসন্ধান করুন এবং বাংলাদেশের সর্বশ্রেষ্ঠ সবজি-ফলের বাজার আবিষ্কার করুন।
                              </p>
                              <p className="text-lg text-white mt-2">
                                    তৃতীয়পক্ষে আমাদের সার্বিক পুষ্টির সবজি-ফল পৌঁছানো বাজারে আপনার নিকটবর্তী কৃষকের উৎপাদন পর্যালোচনা করুন।
                              </p>
                        </div>


                  </section>




                  <Vagitables></Vagitables>
                  <section>
                  <div className="marquee">

  <div className="btn-group">
    <marquee direction="left" scrollamount="6">
      <button className="btn ">20% Discount</button>
      <button className="btn">30% Discount</button>
      <button className="btn">40% Discount</button>
      <button className="btn">50% Discount</button>
    </marquee>
  </div>
</div>
                  <div className="marquee">

  <div className="btn-group">
    <marquee direction="right" scrollamount="4">
      <button className="btn ">20% Discount</button>
      <button className="btn">30% Discount</button>
      <button className="btn">40% Discount</button>
      <button className="btn">50% Discount</button>
    </marquee>
  </div>
</div>

                  </section>

                  <Email></Email>
               
            
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