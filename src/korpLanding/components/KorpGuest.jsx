// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import guest1 from "images/korpLanding/guest/001.png";
import guest2 from "images/korpLanding/guest/002.png";
import guest3 from "images/korpLanding/guest/003.png";
import guest4 from "images/korpLanding/guest/004.png";
import korpprev from "icons/korpprev.png";
import korpnext from "icons/korpnext.png";
import { useRef } from "react";
const guests = [
   {
      img: guest1,
      name: "Полина  М",
      date: "25 июня",
      text: "Идеальная площадка для летних мероприятий с безумно красивым видом и оформлением. Уютные чистые домики, приветливый персонал. Есть все, что необходимо для вечеринки. Спасибо за отличный праздник!",
   },
   {
      img: guest2,
      name: "Полина  М",
      date: "25 июня",
      text: "Идеальная площадка для летних мероприятий с безумно красивым видом и оформлением. Уютные чистые домики, приветливый персонал. Есть все, что необходимо для вечеринки. Спасибо за отличный праздник!",
   },
   {
      img: guest3,
      name: "Полина  М",
      date: "25 июня",
      text: "Идеальная площадка для летних мероприятий с безумно красивым видом и оформлением. Уютные чистые домики, приветливый персонал. Есть все, что необходимо для вечеринки. Спасибо за отличный праздник!",
   },
   {
      img: guest4,
      name: "Полина  М",
      date: "25 июня",
      text: "Идеальная площадка для летних мероприятий с безумно красивым видом и оформлением. Уютные чистые домики, приветливый персонал. Есть все, что необходимо для вечеринки. Спасибо за отличный праздник!",
   },
];

const KorpGuest = () => {
   const swiperRef = useRef();
   return (
      <div className="bg-brown pt-[5vh] pb-[15vh]">
         <div className="wrapper ">
            <Swiper
               // install Swiper modules
               modules={[Navigation, Autoplay]}
               className="korpswiper"
               spaceBetween={50}
               loop={true}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               slidesPerView={1}
               navigation
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
            >
               {guests.map((guest, i) => {
                  return (
                     <SwiperSlide className="px-[2vw] md:p-0" key={i}>
                        <div className="flex w-full items-center justify-center">
                           <div className="min-w-[200px] min-h-[130px] md:w-[700px] bg-[#ECE9E9] rounded-[10px] md:h-[500px] relative">
                              <img
                                 className="absolute w-[30%] md:w-[40%]  md:max-w-auto -left-[10%] md:-left-[20%] top-1/2 transform -translate-y-1/2"
                                 src={guest.img}
                                 alt=""
                              />
                              <div className="pl-[25%] flex h-full flex-col justify-center md:pl-[20%] py-[2vh]">
                                 <h1 className="text-md ">{guest.name}</h1>
                                 <div className="text-sm ">{guest.date}</div>
                                 <h1 className="text-extramd ">{guest.text}</h1>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
            <div className="flex max-w-[800px] mx-auto z-10 justify-between">
               <button
                  className=""
                  onClick={() => swiperRef.current?.slidePrev()}
               >
                  <img
                     className="aspect-square w-[40px] md:w-[120px]"
                     src={korpprev}
                     alt=""
                  />
               </button>
               <button
                  className=""
                  onClick={() => swiperRef.current?.slideNext()}
               >
                  <img
                     className="aspect-square w-[40px] md:w-[120px]"
                     src={korpnext}
                     alt=""
                  />
               </button>
            </div>
         </div>
      </div>
   );
};

export default KorpGuest;
