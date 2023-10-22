// eslint-disable-next-line react/prop-types
const AnimatedButton = ({
   children,
   className,
   onClick,
   style,
   w = 12,
   h = 12,
}) => {
   return (
      <div style={style} onClick={onClick} className={``}>
         <button
            style={{ height: h }}
            className={`animated_connection_btn_big ${
               className || ""
            } z-10 flex  w-[3rem] items-center  justify-center rounded-[48px] bg-[#AB8E67]  pl-3 text-white duration-300  hover:bg-[#b49d7f]`}
         >
            <div
               style={{ height: h }}
               className={` relative flex w-full items-center`}
            >
               <p className="animated_text_appearing montery w-[80%]  font-[600] opacity-0">
                  {children}
               </p>
               <div className="absolute -right-[2px] top-0 ">
                  <div
                     style={{ height: h, width: w }}
                     className={`flex items-center justify-center rounded-full bg-[#AB8E67] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] duration-300    hover:bg-[#b49d7f]`}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={w / 3}
                        height={h / 3}
                        viewBox="0 0 50 50"
                     >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                     </svg>
                  </div>
               </div>
            </div>
         </button>

         {/* <img src={arrow} alt="" /> */}
      </div>
   );
};

export default AnimatedButton;
