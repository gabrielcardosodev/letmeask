import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import { Home } from "./pages/Home/Home";
import { NewRoom } from './pages/NewRoom/NewRoom'

import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<NewRoom />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
    </>
  )
} 
