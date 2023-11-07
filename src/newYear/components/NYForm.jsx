import gift from 'images/NY/gift.webp'
import NYGreenButton from './NYGreenButton';

const NYForm = () => {
   return (
      <div className=' ny-form-bg py-[10vh] md:py-[230px]'>

         <div className='wrapper'>

            <div className="w-full relative flex items-center text-center justify-center">
               {/* <Reveal duration={1.5} variants={slideFromLeft()}> */}
               <div
                  name="Form"
                  className="form relative flex justify-center items-center flex-col bg-NYcream p-[5%] rounded-[16px] shadow-2xl  md:w-[650px] py-14 md:h-[550px] text-center"
               >
                  <img className='absolute w-[100px] md:w-auto md:-top-[120px] -left-6  -top-6 md:-left-[120px]' src={gift} alt="" />
                  <img className='absolute w-[100px] md:w-auto md:-bottom-[120px] -right-6 -bottom-6 md:-right-[120px]' src={gift} alt="" />
                  <div className="text-md font-bold mb-5 ">
                     Оставьте свои данные, и мы обязательно свяжемся с вами
                  </div>
                  <form className="yaes relative" action="">

                     <input
                        type="text"
                        placeholder="Имя"
                        className="rounded-[20px] mount p-2 mb-5 text-black h-[50px] w-full bg-grey"
                     />
                     <input
                        type="text"
                        placeholder="Телефон"
                        className="rounded-[20px] mount p-2 text-black h-[50px] w-full bg-grey"
                     />
                     <NYGreenButton className=" w-1/2 h-[40px] mx-auto  text-white">
                        Отправить
                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </form>
               </div>

               {/* <img src={boo} className="absolute right-0 -bottom-20" alt="" /> */}
            </div>

         </div>
      </div>
   )
}

export default NYForm