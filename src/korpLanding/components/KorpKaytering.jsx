import kay1 from "images/korpLanding/kayt/1.webp";
import Button from "common/Button";
import transline from "images/korpLanding/transline.png";
import trans5 from "images/korpLanding/trans5.png";
import closeblack from "icons/closeblack.png";
import next from "icons/next_photo.png";
import prev from "icons/prev_photo.png";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import menu1 from "images/korpLanding/menu/001.webp";
import menu2 from "images/korpLanding/menu/002.webp";
import menu3 from "images/korpLanding/menu/003.webp";
import menu4 from "images/korpLanding/menu/004.webp";
import menu5 from "images/korpLanding/menu/005.webp";
import menu6 from "images/korpLanding/menu/006.webp";
import menu7 from "images/korpLanding/menu/007.webp";
import menu8 from "images/korpLanding/menu/008.webp";

const menus = [
   { img: menu1 },
   { img: menu2 },
   { img: menu3 },
   { img: menu4 },
   { img: menu5 },
   { img: menu6 },
   { img: menu7 },
   { img: menu8 },
];

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const KorpKaytering = () => {
   const swiperRef = useRef();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <AnimatePresence>
         <div id="kay" className="bg-brown relative">
            {isMenuOpen && (
               <div className="fixed inset-0 z-[10000] flex items-center justify-center  h-full w-[100vw] bg-slate-100 bg-opacity-60 ">
                  <div
                     className="absolute top-5 right-5 cursor-pointer"
                     onClick={toggleMenu}
                  >
                     <img
                        onClick={toggleMenu}
                        className="w-9 h-9"
                        src={closeblack}
                        alt=""
                     />
                  </div>
                  <Swiper
                     // install Swiper modules
                     modules={[Pagination]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     loop={true}
                     className="absolute photo_swiper "
                     onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                     }}
                     // onSwiper={(swiper) => console.log(swiper)}
                     // onSlideChange={() => console.log("slide change")}
                  >
                     {menus.map((photo, i) => {
                        return (
                           <SwiperSlide
                              className="menu_kay flex w-[100vw] items-center justify-center"
                              key={i}
                           >
                              <img
                                 className="object-cover"
                                 src={photo.img}
                                 alt=""
                              />
                           </SwiperSlide>
                        );
                     })}
                  </Swiper>
                  <button
                     className="absolute right-0  top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slideNext();
                     }}
                  >
                     <img src={next} alt="" />
                  </button>
                  <button
                     className="absolute left-0  top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slidePrev();
                     }}
                  >
                     <img src={prev} alt="" />
                  </button>
               </div>
            )}
            <img
               className="absolute -top-[2%] sm:-top-[3\%] md:-top-[5%] lg:-top-[8%] xl:-top-[10%] w-full "
               src={trans5}
               alt=""
            />
            <div className="wrapper py-[8vh]">
               <h1 className="text-lg mb-[50px] text-white text-center">
                  Кейтеринг
               </h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <img src={kay1} alt="" />
                  <div className="flex flex-col justify-center gap-10">
                     <p className="text-white text-center text-md ">
                        Мы предлагаем вам профессиональный кейтеринг, который
                        подарит вам и вашим гостям незабываемый опыт. Наша
                        команда опытных шеф-поваров готова удовлетворить самые
                        изысканные вкусы, создавая уникальные блюда, восхищающие
                        не только визуально, но и вкусовыми качествами.
                     </p>
                     <div className="bg-[#75624A] rounded-[22px] p-5">
                        <div className="text-md text-white text-center">
                           Выберите блюда на мероприятие
                        </div>
                        <Button
                           onClick={toggleMenu}
                           className="bg-brown montserrat mt-4 mx-auto text-white w-full"
                        >
                           Посмотреть меню
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <img src={transline} className="w-full" alt="" />
         </div>
      </AnimatePresence>
   );
};

export default KorpKaytering;
