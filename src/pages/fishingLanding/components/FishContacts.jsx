

import inst from 'images/icons/social/white/inst.png'
import what from 'images/icons/social/white/what.png'
import vk from 'images/icons/social/white/vk.png'


const FishContacts = () => {
   return (
      <div className='bg-FBlack px-4 w-full text-white'>
         <div className='text-white font-bold text-center mb-[5vh] text-md'>Контакты</div>
         <div className='flex w-full justify-between flex-col gap-2 md:flex-row'>
            <div className='w-[733.57px] text-white text-[20px ] md:text-[32px] font-semibold  leading-[44.80px] tracking-wide'>Мы находимся по адресу Московская область,<br /> городской округ Мытищи,<br /> посёлок Менжинец </div>

            <div className='flex gap-2 flex-col text-left md:text-right'>
               <div className='flex justify-start md:justify-end gap-5'>
                  <a href="">
                     <img className='w-[50px]' src={inst} alt="" />
                  </a>
                  <a href="">
                     <img className='w-[50px]' src={what} alt="" />
                  </a>
                  <a href="">
                     <img className='w-[50px]' src={vk} alt="" />
                  </a>
               </div>
               <div className="text-white text-[26px] font-medium acari">+7 (499) 505 50 31</div>
               <div className="text-white text-[26px] font-medium acari">Время работы 24/7</div>
               <div className="text-white text-[26px] font-medium acari">Как проехать</div>
            </div>
         </div>
         <iframe
            className='h-[230px] md:h-[350px]'
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fd5ee0a4eb1741a8b66cbf0ff740727f45a33b5ab3731a94c50d75de17a22fc&amp;source=constructor"
            // scroll="false"
            width="100%"
            height="800"
         // frameBorder="0"
         ></iframe>
      </div>
   )
}

export default FishContacts