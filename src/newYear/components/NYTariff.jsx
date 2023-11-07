// import Button from "common/Button";
import { Link as ScrollLink } from "react-scroll";
import food from "../../assets/food.png";
// import boo from "../assets/boo.png";
// import arrow from "icons/arrow.png";
// import down_arrow from "icons/down_arrow.png";
import TariffComponents from "./NYTarrifComponents";
import Reveal from "common/Reveal";
import { slideFromRight } from "constants/motion";
// import NYCreamButton from './NYCreamButton';
import NYGreenButton from './NYGreenButton';


const Tariff = () => {
   return (
      <div
         id="Tariff"
         name="Tariff"
         className=" bg-no-repeat bg-cover pb-[10vh]  bg-center py-[7vh]"
      >
         <div className="ny-wrapper tariff-bg "  >
            <div className='md:p-[7vw]'>



               <Reveal duration={1.5} variants={slideFromRight(-500)}>
                  <h1 className="text-xl tracking-widest relative">
                     Тарифы
                     <div className="absolute left-2 -top-[30px] md:-top-[70px] text-[64px] md:text-[128px]  opacity-10">
                        Тарифы
                     </div>
                  </h1>
                  <p className="text-center text-lg droid mb-[5vh]">
                     В эту таинственную ночь мы предлагаем вам следующие
                     невероятные варианты размещения
                  </p>
               </Reveal>
               <div className="flex droid flex-col">
                  <TariffComponents />
               </div>

               <ScrollLink
                  to="Form"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  {/* <Button className="bg-pumpkin btn-pum mb-[10vh] text-white mx-auto">
                  Оставить заявку
                  <img src={down_arrow} className="w-7 h-7" alt="" />
               </Button> */}
               </ScrollLink>
            </div>

         </div>

         <div className='wrapper'>



            <div className="flex flex-col items-center justify-center">
               <div className="bg-NYcream ny-shadow w-full items-center  box-border mt-[10vh] droid p-[5%]  text-tarif shadow-xl flex  justify-between rounded-[16px] min-h-[200px]">
                  <div className="">
                     <h1 className="text-black mount text-lg font-light">
                        Вы можете добавить дополнительное
                        <br /> питание к любому тарифу
                     </h1>
                     <p className="text-black text-tarif font-bold ">
                        Во все локации можно добавить
                        <br /> дополнительного гостя за 2000 (без спального
                        места)
                     </p>
                  </div>

                  <ul className="text-black flex flex-col items-center justify-center text-small">
                     <li>
                        <span className='mount'> Завтрак</span> <span className="font-bold"> 700</span>
                     </li>{" "}
                     <li>
                        <span className='mount'> Обед</span> <span className="font-bold"> 1800</span>
                     </li>
                     <li>
                        <span className='mount'> Ужин</span> <span className="font-bold"> 1200</span>
                     </li>
                  </ul>
               </div>
               <img src={food} alt="" />
               <NYGreenButton className='text-black'>Заборонировать место</NYGreenButton>
            </div>



         </div>
      </div>
   );
};

export default Tariff;
