import { useState } from "react";
import add1 from "images/korpLanding/add/001.png";
import add2 from "images/korpLanding/add/002.png";
import add3 from "images/korpLanding/add/003.png";
import add4 from "images/korpLanding/add/004.png";
import add5 from "images/korpLanding/add/005.png";
import add6 from "images/korpLanding/add/006.png";

import Button from "common/Button";

import trans3 from "images/korpLanding/trans3.png";
import trans4 from "images/korpLanding/trans4.png";

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
   return (
      <div id="add" className="relative bg-korpPrimary pb-[13vh]">
         <img
            src={trans4}
            className="absolute -top-[4%] sm:-top-[5%] md:-top-[9%] lg:-top-[12%] xl:-top-[13%] w-full "
         />
         <div className="wrapper pt-[5%]">
            <div className="mb-[10vh]">
               <h1 className="mb-[5vh] text-center text-lg text-white">
                  Дополнительные услуги
               </h1>
               <div className="flex flex-col-reverse md:flex-row  gap-10">
                  <div className="tabs flex w-full md:max-w-[400px] flex-col gap-5  text-slate-600">
                     {tabs.map((tab, index) => (
                        <div
                           key={index}
                           className={`${
                              index === activeTab
                                 ? "text-white border border-white rounded-[30px] p-2 border-opacity-50"
                                 : ""
                           } cursor-pointer text-md font-semibold text-center md:text-start`}
                           onClick={() => handleTabClick(index)}
                        >
                           {tab.label}
                        </div>
                     ))}
                  </div>
                  <div className="tab-content">
                     <img src={tabs[activeTab].img} alt="" />
                  </div>
               </div>
            </div>
            <h2 className="text-md text-white">
               Также по вашему желанию мы можем предоставить услугу
               <br /> оформление юр.договора (+10% к общей сумме)
            </h2>
            <Button className="h-max-[65px] montserrat z-[100] min-w-[200px] sm:w-[600px] gap-5 bg-brown text-white">
               Узнать стоимость
               <img src={arrow} alt="" />
            </Button>
         </div>
         <img
            src={trans3}
            className="absolute -bottom-[4%] sm:-bottom-[5%] md:-bottom-[10%] lg:-bottom-[12%] xl:-bottom-[13%] w-full "
         />
      </div>
   );
};

export default Add;
