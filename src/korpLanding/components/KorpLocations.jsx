import loc1 from "images/korpLanding/locations/003.png";
import loc2 from "images/korpLanding/locations/001.png";
import loc3 from "images/korpLanding/locations/002.png";
import loc4 from "images/korpLanding/locations/004.png";
import longarrow from "icons/longarrow.png";

const locations = [
   {
      title: "ЛЕСНАЯ РЕЗИДЕНЦИЯ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc1,
   },
   { title: "КОТТЕДЖ", people: "До 30 чел", price: "от 15 000 руб", img: loc2 },
   { title: "ШАЛЕ", people: "До 30 чел", price: "от 15 000 руб", img: loc3 },
   {
      title: "ОЛИМПИЙСКАЯ ДЕРЕВНЯ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc4,
   },
];
const KorpLocations = () => {
   return (
      <div className="location">
         <div className="wrapper ">
            <h1 className="text-center text-xl">Локации</h1>
            <h2 className="text-center text-md">
               У нас есть локации{" "}
               <span className="text-brown"> специально для вас</span>
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
               {locations.map((loc, i) => {
                  return (
                     <div
                        className="flex md:max-h-[216px] md:max-w-[580px]  rounded-[19px] bg-korpPrimary"
                        key={i}
                     >
                        <img
                           className="  w-[100px] sm:w-[130px]  md:w-auto md:h-auto"
                           src={loc.img}
                           alt=""
                        />
                        <div className="flex flex-col justify-between    py-5">
                           <div className="text-md font-bold text-brown">
                              {loc.title}
                           </div>
                           <div className="flex items-center  gap-5 text-sm font-bold text-white">
                              <div className="flex flex-col gap-5">
                                 <div>{loc.people}</div>
                                 <div>{loc.price}</div>
                              </div>
                              <img
                                 className="w-7 pr-1"
                                 src={longarrow}
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default KorpLocations;
