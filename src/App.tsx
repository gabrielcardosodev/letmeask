import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import { Home } from "./pages/Home/Home";
import { NewRoom } from './pages/NewRoom/NewRoom'
import { firebase, auth } from './services/firebase'

import { GlobalStyles } from './styles/global'

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function App() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <>
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rooms/new' element={<NewRoom />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
    <GlobalStyles />
    </>
  )
} 
