import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import KorpLanding from "./korpLanding/KorpLanding";
import NYLanding from "./newYear/NYLanding";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<KorpLanding />} path="/korp" />
            <Route element={<NYLanding />} path="/" />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
