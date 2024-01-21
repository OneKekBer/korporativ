
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import ChillHero from './components/ChillHero'
// import { BooleanParam, useQueryParam } from "use-query-params"

import s from './chill.module.scss'

// import ChillServices from './components/ChillServices'
import ChillLocations from './components/ChillLocations'
import ChillGuest from './components/ChillGuest'
import ChillMap from './components/ChillMap'
import ChillContacts from './components/ChillContacts'
import ChillForm from './components/ChillForm'
import ChillServices from './components/ChillServices'
import ChillProgram from './components/chillProgram/ChillProgram'
// import ChillProgramPopup from './components/ChillProgram/ChillProgramPopup'

const ChillLanding = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const GetLinks = () => {
      // const { t } = useTranslation()
      // const links = [
      //    { title: t('chilling.header.Main'), link: "Programa" },
      //    { title: t('chilling.header.Gallery'), link: "Tariff" },
      //    { title: t('chilling.header.Price'), link: "Form" },
      //    { title: t('chilling.header.Terr'), link: "Form" },
      //    { title: t('chilling.header.Locations'), link: "Form" },
      //    { title: t('chilling.header.Call'), link: "Form" },

      // ]

      const links = [
         { title: 'Главная', link: "Programa" },
         { title: 'Стоимость Услуг', link: "services" },
         { title: 'Локации', link: "locations" },
         { title: 'Связаться со мной', link: "Form" },
      ]

      return links
   }

   const links = GetLinks()


   // const [currentNumber, setCurrentNumber] = useState()
   // const [isPopupOpen, setIsPopupOpen] = useQueryParam("popupOpen", BooleanParam)

   // const togglePopup = () => {
   //    setIsPopupOpen((prev) => !prev)
   // }


   return (
      <div className={`montserrat ${s.bg}`}>
         <Helmet>
            <title>Новый год в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="Новый год в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Новый год в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,Новый год, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-ChillBrown text-white'
            className='bg-ChillBrown font-bold text-white' />
         <div className={` bg-white relative  w-full h-full`}>

            {/* {isPopupOpen && <ChillProgramPopup currentNumber={currentNumber} togglePopup={togglePopup} />} */}

            <ChillHero />
            {/* <ChillProgram setCurrentNumber={setCurrentNumber} togglePopup={togglePopup} /> */}
            <ChillProgram />
            <ChillServices />
            <ChillMap />
            <ChillLocations />
            <ChillGuest />
            <ChillContacts />
            <ChillForm />


         </div>
         {/* </div> */}

         <Footer className='bg-ChillBrown text-white' />
      </div>
   )
}

export default ChillLanding