import cookie from "icons/cookies.png";

const Cookie = () => {
   return (
      <div className="bg-white px-[2%] md:px-[5%] gap-3 fixed z-[400000] bottom-0 items-center  w-full h-[145px] flex justify-between">
         <img className="w-[50px] md:w-auto" src={cookie} alt="" />
         <p className="text-small text-black max-w-[600px]">
            Мы используем файлы cookie. Продолжая использовать наш сайт, вы
            автоматически соглашаетесь с использованием данных технологий.
            Политика конфиденциальности.{" "}
         </p>
         <div className="flex items-center flex-col md:flex-row justify-between gap-5">
            <button
               className="text-sm underlineOnHover montserrat font-bold"
               type="button"
            >
               Отклонить
            </button>

            <button
               className="text-sm montserrat hover:border hover:border-black hover:bg-white hover:text-black duration-300 h-[40px] md:h-[50px] w-[100px] md:w-[200px] flex justify-center items-center bg-black text-white font-bold"
               type="button"
            >
               Принять
            </button>
         </div>
      </div>
   );
};

export default Cookie;
