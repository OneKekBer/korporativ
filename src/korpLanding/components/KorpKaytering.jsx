import kay1 from "images/korpLanding/kayt/1.png";
import Button from "common/Button";
import transline from "images/korpLanding/transline.png";
const KorpKaytering = () => {
   return (
      <div id="kay" className="bg-brown ">
         <div className="wrapper py-[8vh]">
            <h1 className="text-lg text-center">Кейтеринг</h1>
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
                     <Button className="bg-brown mt-4 text-white w-full">
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
