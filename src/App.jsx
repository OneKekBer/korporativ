import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

import KorpLanding from "./korpLanding/KorpLanding"
import NYLanding from "./pages/newYear/NYLanding"
import FishingLanding from './pages/fishingLanding/FishingLanding'
import BanLanding from './pages/banLanding/BanLanding'

import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import { QueryParamProvider } from 'use-query-params'
import ChillLanding from './pages/chillLanding/ChillLanding'


function App() {
   return (
      <BrowserRouter>
         <QueryParamProvider adapter={ReactRouter6Adapter}>

            <Routes>
               <Route element={<KorpLanding />} path="/korp" />
               <Route element={<NYLanding />} path="/ny" />
               <Route element={<FishingLanding />} path="/fish" />
               <Route element={<BanLanding />} path="/ban" />
               <Route element={<ChillLanding />} path="/" />
            </Routes>
         </QueryParamProvider>
      </BrowserRouter>
   )
}

export default App
