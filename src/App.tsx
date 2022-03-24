import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { NewRoom } from './pages/NewRoom/index';
import { AuthContextProvider } from './contexts/AuthContext';

import { GlobalStyles } from './styles/global';
import { Room } from './pages/Room';

export function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
            <Route path="/rooms/:id" element={<Room />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}
