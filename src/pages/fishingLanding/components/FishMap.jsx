
import map from 'images/fishing/map.webp'

const FishMap = () => {
   return (
      <div className='bg-FBlack text-white'>
         <div className='text-white font-bold text-center mb-[10vh] text-md'>Карта территории</div>

         <img className='w-full h-full object-cover' src={map} alt="" />

      </div>
   )
}

export default FishMap