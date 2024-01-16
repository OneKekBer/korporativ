import { useTranslation } from 'react-i18next'

const GetServices = () => {

   const { t } = useTranslation()

   const services = [

      [

         {
            title: "Удочка и рыболовные снасти, 1 день",
            price: '1000',
            description: ""

         },
         {
            title: "Резиновая  лодка, 1 день",
            price: '5000',
            description: "Возможна почасовая аренда "
         },




         {
            title: "Катер, 1 час ",
            price: 'от 5000',
            description: "Возможна почасовая аренда "
         },
         {
            title: "Квадроцикл",
            price: 'от 3500',
            description: ""
         },
      ], [
         {
            title: "Аренда беседки",
            price: '100',
            description: ""
         },
         {
            title: "Аренда беседки",
            price: '100',
            description: ""
         },
         {
            title: "Аренда беседки",
            price: '100',
            description: ""
         },
         {
            title: "Аренда беседки",
            price: '100',
            description: ""
         },
         {
            title: "Аренда беседки",
            price: '100',
            description: ""
         },
         {
            title: "Аренда беседки",
            price: '100',
            description: ""
         },
      ]



   ]


   return services
}

const FishServices = () => {

   const services = GetServices()

   return (
      <div className='relative py-[100px] wrapper text-white bg-FBlack '>
         <div>
            <div className='text-center text-36px font-bold'>Дополнительные услуги</div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8 mx-[40px] md:mx-auto gap-x-11 max-w-[1200px] content-center '>



               {services[0].map((item, i) => {
                  return (
                     <div key={i} className='justify-between w-full items-center py-[50px] border-y border-white flex'>
                        <div className='flex flex-col'>
                           <div className="text-white text-[16px] md:text-[26px] font-medium  leading-[33.80px] tracking-wide">{item.title}</div>

                           <div className="text-zinc-500 font-medium leading-relaxed tracking-tight">{item.description}</div>
                        </div>
                        <div className="text-white text-[16px] md:text-[26px] font-medium  leading-[33.80px] tracking-wide">{item.price}₽</div>
                     </div>
                  )
               })}
            </div>
         </div>

         <div className='mt-[120px]'>
            <div className='text-center text-36px font-bold'>Стоимость услуг</div>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-[40px] mt-8 md:mx-auto gap-x-11 max-w-[1200px] content-center '>



               {services[1].map((item, i) => {
                  return (
                     <div key={i} className='justify-between w-full items-center py-[50px] border-y border-white flex'>
                        <div className='flex flex-col'>
                           <div className="text-white text-[16px] md:text-[26px] font-medium  leading-[33.80px] tracking-wide">{item.title}</div>

                           <div className="text-zinc-500 font-medium leading-relaxed tracking-tight">{item.description}</div>
                        </div>
                        <div className="text-white text-[16px] md:text-[26px] font-medium  leading-[33.80px] tracking-wide">{item.price}₽</div>
                     </div>
                  )
               })}

            </div>
         </div>

      </div>
   )
}

export default FishServices