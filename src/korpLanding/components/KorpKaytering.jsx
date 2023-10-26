import kay1 from "images/korpLanding/kayt/1.png";
import Button from "common/Button";
import transline from "images/korpLanding/transline.png";
import trans5 from "images/korpLanding/trans5.png";
const KorpKaytering = () => {
   return (
      <div id="kay" className="bg-brown relative">
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
                     подарит вам и вашим гостям незабываемый опыт. Наша команда
                     опытных шеф-поваров готова удовлетворить самые изысканные
                     вкусы, создавая уникальные блюда, восхищающие не только
                     визуально, но и вкусовыми качествами.
                  </p>
                  <div className="bg-[#75624A] rounded-[22px] p-5">
                     <div className="text-md text-white text-center">
                        Выберите блюда на мероприятие
                     </div>
                     <Button className="bg-brown montserrat mt-4 mx-auto text-white w-full">
                        Посмотреть меню
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <img src={transline} className="w-full" alt="" />
      </div>
   );
};

export default KorpKaytering;
