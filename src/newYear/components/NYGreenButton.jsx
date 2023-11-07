/* eslint-disable react/prop-types */

import Button from 'common/Button';
const NYGreenButton = ({ children, onClick, className }) => {

   return (
      <Button onClick={onClick} className={`${className || ''} yaes w-[180px] 370p:w-[240px]  h-[30px] md:min-w-[400px] text-NYcream md:h-[100px] bg-NYgreen`}>{children}</Button>
   )
}

export default NYGreenButton