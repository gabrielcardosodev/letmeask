import { FormEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';

import { RoomButton } from '../RoomButton';
import { ButtonStyles } from '../../UI/Button/styles';

import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';

import { Header, Main } from './styles';

type RoomParams = {
  id: string;
};

export function ContentRoomPage() {
  const { user, signInWithGoogle } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');

  const roomId = params.id;

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      toast.error('You must be logged in.');
      return;
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Header>
        <div className="content">
          <Link to="/">
            <img src={logoImg} alt="Logo da Letmeask" />
          </Link>
          <RoomButton code={roomId || ''} />
        </div>
      </Header>

      <Main>
        <div>
          <h1>Sala React Q&amp;A</h1>
          <span>4 perguntas</span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
          />
          <div>
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta,
                <button onClick={signInWithGoogle}>faça seu login.</button>
              </span>
            )}
            <ButtonStyles type="submit" disabled={!user}>
              Enviar pergunta
            </ButtonStyles>
          </div>
        </form>
      </Main>
    </>
  );
}
