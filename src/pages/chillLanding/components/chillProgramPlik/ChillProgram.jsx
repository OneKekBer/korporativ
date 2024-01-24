/* eslint-disable react/prop-types */

import { v4 as uuid4 } from 'uuid'
import { m } from 'framer-motion'

import main1 from 'images/chill/program/001.webp'
import main2 from 'images/chill/program/002.webp'
import main3 from 'images/chill/program/003.webp'
import main4 from 'images/chill/program/004.webp'
import main5 from 'images/chill/program/005.webp'
import main6 from 'images/chill/program/006.webp'
import main7 from 'images/chill/program/007.webp'
import main8 from 'images/chill/program/008.webp'
import main9 from 'images/chill/program/009.webp'
import main10 from 'images/chill/program/010.webp'
import main11 from 'images/chill/program/011.webp'
import main12 from 'images/chill/program/012.webp'
import main13 from 'images/chill/program/013.webp'
import main14 from 'images/chill/program/014.webp'
import main15 from 'images/chill/program/015.webp'
import main16 from 'images/chill/program/016.webp'
import main17 from 'images/chill/program/017.webp'
import main18 from 'images/chill/program/018.webp'
import main19 from 'images/chill/program/019.webp'
import main20 from 'images/chill/program/020.webp'
import main21 from 'images/chill/program/021.webp'
import main22 from 'images/chill/program/022.webp'
import main23 from 'images/chill/program/023.webp'
import main24 from 'images/chill/program/024.webp'
import main25 from 'images/chill/program/025.webp'
import main26 from 'images/chill/program/026.webp'
import main27 from 'images/chill/program/027.webp'
import main28 from 'images/chill/program/028.webp'
import main29 from 'images/chill/program/029.webp'
// import main30 from 'images/chill/program/030.webp'


import { Navigation, Autoplay } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/scrollbar"

import close from 'icons/close.png'


import s from './../../chill.module.scss'
import { useEffect, useState } from 'react'

const GetProgram = () => {
   const program = [

      {
         img: main1,
         title: 'Казан плова + заезд на фэтбайках',
         price: '4990₽',
         number: 1,
         hasAbout: false,
         oldPrice: '',
         desc: '',
         type: 'Лето'

      },
      {
         img: main2,
         title: 'Экскурсия в усадьбу Марфино',
         price: 'от 1500₽ / чел',
         oldPrice: '',
         number: 2,
         hasAbout: true,
         desc: 'с онлайн-гидом',
         type: 'Лето'

      },
      {
         img: main3,
         title: 'Фэтбайки',
         price: '1000₽',
         oldPrice: '',
         number: 3,
         hasAbout: true,
         desc: '',
         type: 'Лето'

      },


      {
         img: main4,
         title: 'Гидроцикл',
         price: 'от 3 500₽',
         oldPrice: '',
         number: 4,
         hasAbout: true,
         desc: '* цена за 1 час',
         type: 'Лето'

      },
      {
         img: main5,
         title: 'Волейбол',
         price: '1000₽',
         oldPrice: '',
         number: 5,
         hasAbout: true,
         desc: '* цена за 1 час',
         type: 'Лето'
      },
      {
         img: main6,
         title: 'Сап-борд',
         price: '3 000₽',
         oldPrice: '',
         number: 6,
         hasAbout: true,
         desc: '* цена за 1 шт',
         type: 'Лето'
      },
      {
         img: main7,
         title: 'Катер',
         price: '10 000₽',
         oldPrice: '',
         number: 7,
         hasAbout: true,
         desc: '',
         type: 'Лето'
      },
      {
         img: main8,
         title: 'Баня с купелью',
         oldPrice: '',
         price: '10 000₽',
         number: 8,
         hasAbout: true,
         desc: '* цена за 1 час',
         type: 'Лето'

      },
      {
         img: main9,
         title: 'Кино и настольные игры',
         oldPrice: '',
         price: '500₽',
         number: 9,
         hasAbout: true,
         desc: '',
         type: 'Лето'
      },
      {
         img: main10,
         title: 'Баббл соккер + аренда беседки + мангал(уголь, решётка)',
         price: '4990 ₽ /чел.',
         oldPrice: '8990 ₽ /чел.',
         number: 10,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main11,
         title: 'Казан плова + заезд на лодке',
         price: '4990 ₽ /чел.',
         oldPrice: '8990 ₽ /чел.',
         number: 11,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main12,
         title: 'Заплыв на каноэ + баня с купелью + чай из самовара на выбор',
         price: '10990 ₽ /чел.',
         oldPrice: '15 990 ₽ /чел.',
         number: 12,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main13,
         title: 'Аренда SUP + баня с купелью + чай из самовара на выбор',
         price: '10990 ₽ /чел.',
         oldPrice: '15 990 ₽ /чел.',
         number: 13,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main14,
         title: 'Экскурсия в Марфино + аренда фэтбайков + казан ухи/плова',
         price: '6 990 ₽ /чел.',
         oldPrice: '10 990 ₽ /чел.',
         number: 14,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main15,
         title: 'Экскурсия в Марфино + аренда фэтбайков + казан ухи/плова + ночлег в охотничьем домике с видом на водохранилище',
         price: '13 990 ₽ /чел',
         oldPrice: '18 990 ₽ /чел',
         number: 15,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main16,
         title: 'Аренда квадроциклов/снегоходов  + казан ухи/плова + ночлег в охотничьем домике с видом на водохранилище',
         price: 'от 15 990 ₽ /чел',
         oldPrice: 'от 19 990 ₽ /чел',
         number: 16,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main17,
         title: 'Ночлег в выбранной локации + аренда мангала(уголь,решёка) + чай из самовара или глинтвейн',
         price: 'от 11990 ₽ / чел.',
         oldPrice: 'от 15990 ₽ / чел.',
         number: 17,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main18,
         title: 'Командные лыжи + аренда бани с купелью + чай из самовара или глинтвейн',
         price: 'от 6 990 ₽ /чел',
         oldPrice: 'от 10 990 ₽ /чел',
         number: 18,
         hasAbout: false,
         desc: '',
         type: 'Компания'
      },
      {
         img: main19,
         title: 'Стрельба из лука + баня с купелью на 3 часа + аренда мангала',
         price: '7 990 ₽ /чел',
         oldPrice: '11 990 ₽ /чел',
         number: 19,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main20,
         title: 'Перетягивание каната + аренда мангала + аренда волейбольной площадки',
         price: '5 990 ₽ /чел',
         oldPrice: '9 990 ₽ /чел',
         number: 20,
         hasAbout: false,
         desc: '',
         type: 'Компания'
      },
      {
         img: main21,
         title: 'Перетягивание каната + стрельба из лука + “Скользкое бревно” + прыжок доверия + “китайские палочки” + казан ухи / плова',
         price: '5 990 ₽ /чел',
         oldPrice: '9 990 ₽ /чел',
         number: 21,
         hasAbout: false,
         desc: '*Рассчитано на команды от 4 человек',
         type: 'Компания'
      },
      {
         img: main22,
         title: 'Фотосессия + аренда катера + ужин на двоих',
         price: '10 990 ₽ /чел',
         oldPrice: '18 990 ₽ /чел',
         number: 22,
         hasAbout: false,
         desc: '',
         type: 'Лето'
      },
      {
         img: main23,
         title: 'Квест: расследование таинственного убийства в лесу',
         price: '10 990 ₽ /чел',
         oldPrice: '18 990 ₽ /чел',
         number: 23,
         hasAbout: false,
         desc: '* Рассчитано на команды от 4 человек',
         type: 'Компания'
      },
      {
         img: main24,
         title: 'Стэнд-ап паддл (заезд на равновесие на SUP - досках)',
         price: '6 990 ₽ /чел',
         oldPrice: '9 990 ₽ /чел',
         number: 24,
         hasAbout: false,
         desc: '* Рассчитано на команды от 3 человек',
         type: 'Лето'
      },
      {
         img: main25,
         title: '“Охота за сокровищами”(игра на сплочение и укрепеление командного духа)',
         price: '4 990 ₽ /чел',
         oldPrice: '8 990 ₽ /чел',
         number: 25,
         hasAbout: false,
         desc: '* Рассчитано на команды от 4 человек',
         type: 'Компания'
      },
      {
         img: main26,
         title: '“Зарница” Найди флаг и передай его на базу! Твоя команда сможет сделать это первой?',
         price: '10 990 ₽ /чел',
         oldPrice: '18 990 ₽ /чел',
         number: 26,
         hasAbout: false,
         desc: '*Рассчитано на команды от 4 человек',
         type: 'Компания'
      },
      {
         img: main27,
         title: '“Строительство плота”(Запоминающийся способ развлечь сотрудников и сплотить коллег)',
         price: '10 990 ₽ /чел',
         oldPrice: '18 990 ₽ /чел',
         number: 27,
         hasAbout: false,
         desc: '* Рассчитано на команды от 4 человек',
         type: 'Компания'
      },
      {
         img: main28,
         title: 'Спортивная ориентация(“Весёлые старты”)',
         price: '3 990 ₽ /чел',
         oldPrice: '5 990 ₽ /чел',
         number: 28,
         hasAbout: false,
         desc: '* Рассчитано на команды от 5 человек',
         type: 'Компания'
      },
      {
         img: main29,
         title: 'Кулинарный тимбилдинг Чья команда приготовит самое вкусное блюдо?',
         price: '2 990 ₽ /чел',
         oldPrice: '4 990 ₽ /чел',
         number: 29,
         hasAbout: false,
         desc: '* Рассчитано на команды от 5 человек',
         type: 'Компания'
      },


   ]

   return program
}



const ChillProgram = ({ handleProductClick }) => {


   const program = GetProgram()


   const getAllTypes = (program) => {
      const types = []
      program.map((item) => {
         if (!types.includes(item.type)) {
            if (item.type !== undefined) {

               types.push(item.type)
            }
         }


      })
      return types
   }

   const types = getAllTypes(program)


   const [menuItem, setMenuItem] = useState('Все')
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [selectedImages, setSelectedImages] = useState(program)

   const handleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
      // changeCurrentItems()
   }


   const handleItems = (currentType) => {
      setIsMenuOpen(false)
      setMenuItem(currentType)
      filterProgram()
   }

   const handleClose = () => {
      setIsMenuOpen(false)
      setMenuItem('Все')
      setSelectedImages(program)
      filterProgram()
   }

   const filterProgram = () => {
      const filteredPrograms = program.filter(item => item.type !== menuItem)
      setSelectedImages(filteredPrograms)
   }


   console.log(menuItem)

   useEffect(() => {
      const script = document.createElement("script")
      script.src = "//widget.bronirui-online.ru/js/app.js"
      script.async = true

      const initializeWidget = () => {
         window.znmsWidget.init("#znms-service-widget-module", {
            moduleId: 5026,
            type: 'booking-services',
         })

         // const customStyles = `
         //  .znms-widget__brononline_popup_full {
         //    width: 90vw !important;
         //    height: 60vh !important;
         //    position: fixed !important;
         //    top: 50% !important;
         //    left: 50% !important;
         //    transform: translate(-50%, -50%) !important;
         // }

         // `
         // const styleElement = document.createElement("style")
         // styleElement.innerHTML = customStyles
         // document.head.appendChild(styleElement)
      }
      script.onload = initializeWidget



      document.body.appendChild(script)

   }, [])
   console.log()

   return (
      <div name='proga' id='program' className='bg-white relative text-black'>
         <div id="znms-service-widget-module"></div>
         <div className="text-center text-stone-700 mb-[10vh] text-lg font-bold leading-[62.40px]">Активный отдых в Икша Кантри Клаб</div>
         {/* <div className=' font-bold text-center mb-[10vh] text-ChillHeadBrown text-lg'>Активный отдых в Икша Кантри Клаб</div> */}



         <div style={{ display: `${isMenuOpen ? 'block' : 'none'}` }} className="absolute py-7 z-10 left-1/2 -translate-x-1/2 lg:top-[210px] top-[180px]  w-[360px] bg-[#5F4D3A] rounded-b-[22px]">
            <div className="relative w-full pl-12 flex flex-col gap-2 items-start">
               {
                  types.map((el) => {
                     return (
                        <button key={uuid4()} onClick={() => { handleItems(el) }} className="lg:text-[35px] text-[24px] text-white font-medium">
                           {el}
                        </button>
                     )
                  })
               }
            </div>
         </div>
         <m.button
            // initial={{ opacity: 1 }}
            // animate={{
            //    opacity: 1,
            //    transition: {
            //       delay: 2,
            //       duration: 2
            //    },
            // }}

            className={` ${isMenuOpen ? 'rounded-t-[22px]' : 'rounded-[22px]'} opacity-100 mb-[70px] w-[360px] mx-auto h-[65px] flex items-center justify-between text-white bg-[#5F4D3A] `}
         >
            <div onClick={handleMenu} className="relative h-full w-full flex  justify-between px-[40px] gap-14 items-center ">
               <p className="text-white lg:text-[35px] text-[24px] font-medium">
                  {menuItem}
               </p>

            </div>
            <img onClick={handleClose} className=' z-[10] p-[20px]' src={close} alt="" />
         </m.button>



         <div className='lg:grid hidden  max-w-[1400px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center place-items-center md:px-[30px] flex-col gap-[40px] w-full items-center lg:flex-row'>

            {selectedImages.map((item, i) => {
               return (

                  <div key={i} className={` ${s.acariMedium} w-[94%] sm:max-w-[500.43px]  bg-white rounded-[10px] border border-stone-700`}>


                     <div className={` ${s.acariMedium} h-[217.35px] relative`}>
                        {item.oldPrice !== '' && <div className='absolute -top-5 right-0 z-[2] flex justify-center items-center acariBold text-white w-[200px] h-[60px] text-md rounded-[10px] bg-NYred'>Акция</div>}
                        <img className="w-full  absolute h-[217.35px]  border-b-2 " src={item.img} />
                     </div>


                     <div className=' p-[15px] md:p-[30px] '>
                        <div className='text-32px text-[#593723] leading-[41.60px] acariBold'>{item.title}</div>
                        <div className="text-left text-stone-500 font-semibold ">{item.desc !== '' ? <div>{item.desc}</div> : ''}</div>

                        <div className='flex justify-between mb-[20px]'>
                           {item.oldPrice !== '' ?
                              <div className='flex flex-col items-center justify-center w-full'>
                                 <div className="text-center text-yellow-900 text-36px font-semibold line-through leading-loose">{item.oldPrice}</div>
                                 <div className="text-center text-red-600 text-36px font-semibold leading-loose">{item.price}</div>


                              </div>
                              :
                              <div className='flex flex-col'>
                                 <div className="text-left text-36px text-stone-700 font-semibold">{item.price}</div>




                              </div>
                           }
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between'>
                           <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module') }} className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-stone-700">
                              <div className="text-center text-stone-700 font-semibold ">Забронировать</div>
                           </div>
                           {item.hasAbout ? <div onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                              <div className="text-center text-zinc-500 font-semibold">Подробнее</div>
                           </div> : ''}

                        </div>


                     </div>
                  </div>
               )
            })}


         </div >

         <Swiper
            // install Swiper modules
            modules={[Navigation]}
            className="block lg:hidden korpswiper"
            spaceBetween={50}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            slidesPerView={window.innerWidth > 450 ? 2 : 1}
            navigation

         >
            {selectedImages.map((item, i) => {
               return (
                  <SwiperSlide className="" key={i}>



                     <div key={i} className={` ${s.acariMedium} w-full  bg-white rounded-[10px] border border-stone-700`}>


                        <div className={` ${s.acariMedium} h-[217.35px] relative`}>
                           {item.oldPrice !== '' && <div className='absolute -top-5 right-0 z-[2] flex justify-center items-center acariBold text-white w-[200px] h-[60px] text-md rounded-[10px] bg-NYred'>Акция</div>}
                           <img className="w-full  absolute h-[217.35px]  border-b-2 " src={item.img} />
                        </div>


                        <div className=' p-[15px] md:p-[30px] '>
                           <div className='text-32px text-[#593723] leading-[41.60px] acariBold'>{item.title}</div>
                           <div className="text-left text-stone-500 font-semibold ">{item.desc !== '' ? <div>{item.desc}</div> : ''}</div>

                           <div className='flex justify-between mb-[20px]'>
                              {item.oldPrice !== '' ?
                                 <div className='flex flex-col items-center justify-center w-full'>
                                    <div className="text-center text-yellow-900 text-36px font-semibold line-through leading-loose">{item.oldPrice}</div>
                                    <div className="text-center text-red-600 text-36px font-semibold leading-loose">{item.price}</div>


                                 </div>
                                 :
                                 <div className='flex flex-col'>
                                    <div className="text-left text-36px text-stone-700 font-semibold">{item.price}</div>


                                 </div>
                              }
                           </div>

                           <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between'>
                              <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module') }} className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-stone-700">
                                 <div className="text-center text-stone-700 font-semibold ">Забронировать</div>
                              </div>
                              {item.hasAbout ? <div onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                                 <div className="text-center text-zinc-500 font-semibold">Подробнее</div>
                              </div> : ''}

                           </div>


                        </div>
                     </div>

                  </SwiperSlide>
               )
            })}
         </Swiper>


      </div >
   )
}

export default ChillProgram