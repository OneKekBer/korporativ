import React, { useState, useEffect } from "react";
import close from "./../assets/close.png";
import FormInput from "./FormInput";
import TellInput from "./TellInput";
import { URLData } from "../utils/URLData";
import { useNavigate } from "react-router-dom";
const MainPopup = ({ isPopupOpen, togglePopup }) => {
   const [isPopupCompleted, setIsPopupCompleted] = useState(false);
   const [isError, setIsError] = useState(true); // State for tracking errors
   const [name, setName] = useState("");
   const [isValid, setIsValid] = useState(true);
   const [phone, setPhone] = useState("");
   const navigate = useNavigate();

   const handleSubmitBot = async () => {
      const data = {
         name: name,
         phone: phone,
         email: "-",
      };

      const sendingData = {
         ...data,
         source: "https://ikshacountryclub.com/",
         formType: "Форма имя + телефон десктоп ",
         link: window.location.href,
         ...URLData,
      };
      console.log(data);
      try {
         const response = await fetch(
            "https://infinite-hamlet-38304-2023ba50b8de.herokuapp.com/submit-form",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Access-Control-Allow-Origin": "*",
               },
               body: new URLSearchParams(sendingData).toString(),
            }
         );

         if (response.ok) {
            setTimeout(() => {
               navigate("/thanks");
            }, 1000);
         } else {
            alert("Произошла ошибка при отправке данных");
         }
      } catch (error) {
         console.error(error);
         alert("Произошла ошибка при отправке данных");
      }
   };

   useEffect(() => {
      // Проверка на ошибки при изменении полей формы
      const newIsError = !name || !phone || !isValid;
      setIsError(newIsError);
   }, [name, phone]);

   const handlePhoneChange = (e) => {
      const inputValue = e.target.value;
      const numericValue = inputValue.replace(/[^\d]/g, ""); // Убираем все символы, кроме цифр
      const isValidPhone = numericValue.length === 11; // Проверяем, что длина равна 11
      setPhone(numericValue);
      setIsValid(isValidPhone); // Устанавливаем валидность номера телефона
   };
   const handleNameChange = (e) => {
      const { value } = e.target;
      setName(value);
   };

   const handlePopupClose = () => {
      setIsPopupCompleted(false);
      togglePopup();
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isError) {
         return;
      }
      const data = {
         name,
         phone,
         email: "-",
      };
      handleSubmitBot();
      // ... ваша существующая логика ...
      setPhone(""); // Очищаем состояние телефона
      setName(""); // Очищаем состояние телефона
      setIsPopupCompleted(!isPopupCompleted);
   };
   return (
      <div className="montery">
         {isPopupOpen && (
            <div>
               {isPopupCompleted ? (
                  <div
                     className={`fixed left-1/2 top-1/2 z-[2000] flex min-h-[300px] w-[70%] -translate-x-1/2  -translate-y-1/2 transform flex-col  items-center justify-center rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl lg:w-[60%]`}
                  >
                     <div className="absolute right-5 top-5">
                        <img
                           className="h-7 w-7 cursor-pointer object-cover"
                           onClick={handlePopupClose}
                           src={close}
                           alt="close"
                        />
                     </div>
                     <p className="text-[16px] font-bold text-[#6C6053]">
                        Ваши данные успешно отправлены!
                        <br />
                        Спасибо, что выбрали нас! Наш менеджер свяжется с вами в
                        ближайшее время для уточнения информации
                     </p>
                     <button
                        onClick={handlePopupClose}
                        className={`mt-4 flex h-[40px] w-full items-center justify-center rounded-[10px] border bg-[#7C6F61]  text-white`}
                     >
                        Закрыть
                     </button>
                  </div>
               ) : (
                  <div className="fixed left-1/2 top-1/2 z-[2000] flex min-h-[300px] w-[70%] -translate-x-1/2  -translate-y-1/2 transform flex-col  items-center justify-center rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl lg:w-[60%]">
                     <div className="absolute right-5 top-5">
                        <img
                           className="h-7 w-7 cursor-pointer object-cover"
                           onClick={togglePopup}
                           src={close}
                           alt="close"
                        />
                     </div>
                     <p className="text-[25px] font-bold text-[#6C6053]">
                        Заполните форму, чтобы мы связались с вами
                     </p>
                     <form
                        className="flex w-full  flex-col gap-5"
                        onSubmit={handleSubmit}
                     >
                        {/* <input
                           placeholder="Имя"
                           type="text"
                           className={`border-b-[1px] border-[#7C6F61] bg-transparent `}
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                        />
                        <input
                           placeholder="Телефон"
                           type="tel"
                           className={`border-b-[1px] border-[#7C6F61] bg-transparent `}
                           name="phone"
                           value={formData.phone}
                           onChange={handleInputChange}
                        /> */}
                        <FormInput
                           placeholder="Имя"
                           name="name"
                           value={name}
                           onChange={handleNameChange}
                           type="text"
                        />

                        <TellInput
                           value={phone}
                           isValid={isValid}
                           onChange={handlePhoneChange}
                        />
                        <button
                           type="submit"
                           disabled={isError}
                           className={`h-[40px] rounded-[10px] ${
                              isError
                                 ? "border-none bg-[#D0C9C9]"
                                 : "white border-[2px] border-green-400"
                           } w-full`}
                        >
                           Отправить
                        </button>
                     </form>
                  </div>
               )}
            </div>
         )}
      </div>
   );
};

export default MainPopup;
