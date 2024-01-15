import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

import KorpLanding from "./korpLanding/KorpLanding"
import NYLanding from "./pages/newYear/NYLanding"
import FishingLanding from './pages/fishingLanding/FishingLanding'

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<KorpLanding />} path="/korp" />
            <Route element={<NYLanding />} path="/ny" />
            <Route element={<FishingLanding />} path="/" />
         </Routes>
      </BrowserRouter>
   )
}

export default App
