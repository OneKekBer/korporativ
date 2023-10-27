import { useState } from "react";
import add1 from "images/korpLanding/add/001.webp";
import add2 from "images/korpLanding/add/002.webp";
import add3 from "images/korpLanding/add/003.webp";
import add4 from "images/korpLanding/add/004.webp";
import add5 from "images/korpLanding/add/005.webp";
import add6 from "images/korpLanding/add/006.webp";

import Button from "common/Button";
import korpnext from "icons/next_photo.png";

import trans2 from "images/korpLanding/trans2.png";

import arrow from "icons/arrow.png";

const tabs = [
   { label: "Растопка бани/купели", img: add1 },
   { label: "Аренда территории", img: add2 },
   {
      label: "Активный отдых (квадроциклы, рыбалка с лодки и др)",
      img: add3,
   },
   { label: "Караоке", img: add4 },
   { label: "Кейтеринг", img: add5 },
   { label: "Кальян", img: add6 },
];

const Add = () => {
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index) => {
      setActiveTab(index);
   };

   const switchSlide = () => {
      if (activeTab === 5) setActiveTab(-1);
      setActiveTab((prev) => prev + 1);
   };
   return (
      <div id="add" className="relative bg-korpPrimary pb-[13vh] w-full">
         {/* <div className="absolute w-full"> */}
         <img
            src={trans2}
            alt=""
            className="absolute w-full -top-[3vh] sm:-top-[3.5vh] md:-top-[6vh] lg:-top-[8vh] xl:-top-[10vh]  object-cover   "
         />
         {/* </div> */}
         <div className="wrapper relative pt-[10%]">
            <div className="mb-[10vh]">
               <h1 className="mb-[5vh] text-center text-lg text-white">
                  Дополнительные услуги
               </h1>

               <div className="relative">
                  <div className="flex flex-col-reverse md:flex-row  gap-10">
                     <div className="tabs flex w-full md:max-w-[400px] flex-col gap-5  text-slate-600">
                        {tabs.map((tab, index) => (
                           <div
                              key={index}
                              className={`${
                                 index === activeTab
                                    ? "text-white border border-white rounded-[30px] p-2 border-opacity-50"
                                    : ""
                              } cursor-pointer text-md font-semibold text-center  md:text-start`}
                              onClick={() => handleTabClick(index)}
                           >
                              {tab.label}
                           </div>
                        ))}
                     </div>
                     <div className="tab-content relative">
                        <img src={tabs[activeTab].img} alt="" />
                        <button
                           onClick={switchSlide}
                           className="absolute right-0 md:-right-10 w-[60px] md:w-auto transform top-1/2 -translate-y-1/2 text-white "
                        >
                           <img src={korpnext} alt="" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <h2 className="text-md text-white">
               Также по вашему желанию мы можем предоставить услугу
               <br /> оформление юр.договора (+10% к общей сумме)
            </h2>
            <Button className="h-[60px] montserrat z-[100] min-w-[200px] sm:w-[600px] gap-5 bg-brown text-white">
               Узнать стоимость
               <img src={arrow} alt="" />
            </Button>
         </div>
         <img
            src={trans2}
            className="absolute -bottom-[2vh] sm:-bottom-[4vh] md:-bottom-[6vh] lg:-bottom-[8vh] xl:-bottom-[10vh] w-full "
         />
      </div>
   );
};

export default Add;
