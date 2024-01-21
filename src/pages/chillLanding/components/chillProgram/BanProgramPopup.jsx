/* eslint-disable react/prop-types */
import React from 'react'
import { useParams } from 'react-router-dom'


const GetInfo = () => {
   const info = [
      {

      }
   ]
   return info
}
const BanProgramPopup = ({ currentNumber, isPopupOpen, togglePopup }) => {
   const { number } = useParams()
   const info = GetInfo()


   return (
      <div className='fixed z-[10000000] w-[90vw] h-[90vh] bg-white text-black'>
         {currentNumber}
         {info[currentNumber - 1].map((item, i) => {



         })}
      </div>
   )
}

export default BanProgramPopup