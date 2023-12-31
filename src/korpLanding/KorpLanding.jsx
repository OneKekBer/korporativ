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
import Footer from "common/Footer";
import Cookie from "common/Cookie";
const KorpLanding = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const links = [
      // { title: "Почему мы", link: "whyus" },
      { title: "Фотографии", link: "photo" },
      { title: "Локации", link: "locations" },
      { title: "Кейтеринг", link: "kay" },
      { title: "Доп услуги", link: "add" },
      { title: "Связаться со мной", link: "Form" },
   ];
   return (
      <div className="montserrat relative">
         <Cookie />
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-NYheader'
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
         <Footer className="montserrat bg-korpHeader" />
      </div>
   );
};


export default KorpLanding;
