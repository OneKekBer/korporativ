import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import KorpLanding from "./korpLanding/KorpLanding";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<KorpLanding />} path="/" />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
