import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import { useRoom } from '../../hooks/useRoom';

import { Question } from '../Question';
import { RoomButton } from '../RoomButton';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';
import emptyQuestionsImg from '../../assets/images/empty-questions.svg';
import deleteImg from '../../assets/images/delete.svg';

import { Header, Main } from './styles';
import { AdminButtonStyles } from '../../UI/Button/styles';
import { CloseRoomModal } from '../CloseRoomModal';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId!);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleCloseRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    navigate('/');
  }

  async function handleRemoveQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <>
      <Header>
        <div className="content">
          <Link to="/">
            <img src={logoImg} alt="Logo da Letmeask" />
          </Link>
          <div>
            <RoomButton code={roomId || ''} />
            <AdminButtonStyles
              onClick={() => {
                openModal();
              }}
            >
              Encerrar sessão
            </AdminButtonStyles>
          </div>
        </div>
      </Header>

      <Main>
        <div className="user">
          <h1>Sala: {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        {questions.length === 0 && (
          <div className="no-question">
            <img
              src={emptyQuestionsImg}
              alt="Imagem que ilustra ainda não ter mensagens criadas"
            />
            <h2>Nenhuma pergunta por aqui...</h2>
            <p>
              Faça o seu login e seja a primeira pessoa a fazer uma pergunta!
            </p>
          </div>
        )}

        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            >
              <button
                type="button"
                onClick={() => handleRemoveQuestion(question.id)}
              >
                <img src={deleteImg} alt="icone de lixeira" />
              </button>
            </Question>
          );
        })}
      </Main>

      <CloseRoomModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleCloseRoom={handleCloseRoom}
      />
    </>
  );
}
