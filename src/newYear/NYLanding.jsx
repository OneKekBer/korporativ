import Hero from "./components/NYHero";
import { Programa } from "./components/NYPrograma";
import "./index.css";
import Tariff from "./components/NYTariff";
import Footer from "common/Footer";
import Header from "common/Header";
import ProgramaSwiper from './components/NYProgramaSwiper';
import venok from 'images/NY/venok.webp';
import { useState } from 'react';
import NYForm from './components/NYForm';


const links = [{

}]

const NYLanding = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   return (
      <div className="yaes">
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-NYheader text-NYgreen'
            className='bg-NYheader text-NYgreen' />
         <div className='ny-bg relative  w-full h-full'>
            <Hero />
            <Programa />

            <div className='relative'>

               <img src={venok} className='max-h-[500px] absolute -bottom-[140px] z-[100]  w-screen' alt="" />
            </div>
            {/* <div className='ny-bg  relative w-full h-full'> */}
            <ProgramaSwiper />


            <Tariff />
         </div>
         {/* </div> */}
         <NYForm />
         <Footer className='bg-NYheader text-NYgreen   ' />
      </div>
   );
};

export default NYLanding;
