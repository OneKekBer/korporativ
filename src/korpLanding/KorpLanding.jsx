import Header from "common/Header";
import Hero from "./components/KorpHero";
import KorpLocations from "./components/KorpLocations";
import Photo from "./components/KorpPhoto";
import Add from "./components/KorpAdd";
import Form from "./components/KorpForm";

import Whyus from "./components/KorpWhyus";
import KorpKaytering from "./components/KorpKaytering";
import KorpGuest from "./components/KorpGuest";
import { useState } from "react";
const KorpLanding = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   return (
      <div className="montserrat">
         <Header
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            className="montserrat bg-korpHeader text-grey"
         />
         <Hero />
         <Whyus />
         <Photo />
         <KorpLocations />
         <KorpKaytering />
         <KorpGuest />
         <Add />
         <Form />
      </div>
   );
};

export default KorpLanding;
