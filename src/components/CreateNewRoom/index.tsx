import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { ButtonStyles } from '../../UI/Button/styles';

import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';

import { Container } from './styles';

export function ContentNewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const navigate = useNavigate();

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    navigate(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <div>
        <img src={logoImg} alt="Logo da Letmeask" />
        <h2>Crie uma nova sala</h2>
        <form onSubmit={handleCreateRoom}>
          <input
            type="text"
            placeholder="Nome da sala"
            onChange={(e) => setNewRoom(e.target.value)}
            value={newRoom}
          />
          <ButtonStyles type="submit">Criar sala</ButtonStyles>
        </form>
        <p>
          Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
        </p>
      </div>
    </Container>
  );
}
