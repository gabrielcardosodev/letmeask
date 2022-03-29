import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';

import { Home } from './pages/Home/index';
import { NewRoom } from './pages/NewRoom/index';
import { Room } from './pages/Room';
import { AdminPage } from './pages/AdminPage';

import { AuthContextProvider } from './contexts/AuthContext';

import { GlobalStyles } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
            <Route path="/rooms/:id" element={<Room />} />
            <Route path="/rooms/admin/:id" element={<AdminPage />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}
