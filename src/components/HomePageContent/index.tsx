import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';

import { ButtonStyles } from '../../UI/Button/styles';

import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import loginIconImg from '../../assets/images/login.svg';

import { Content } from './styles';

export function ContentHomePage() {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate('/rooms/new');
  }

  async function handleJoinRoom(e: FormEvent) {
    e.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error('Room does not exists.');
      return;
    }

    navigate(`/rooms/${roomCode}`);
  }
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Content>
        <div className="main-content">
          <img src={logoImg} alt="Logo da Letmeask" />
          <button onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Cria sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(e) => setRoomCode(e.target.value)}
              value={roomCode}
            />
            <ButtonStyles type="submit">
              <img src={loginIconImg} alt="ícone de login" />
              Entrar em uma sala
            </ButtonStyles>
          </form>
        </div>
      </Content>
    </>
  );
}
