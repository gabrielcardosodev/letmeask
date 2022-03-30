import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRoom } from '../../hooks/useRoom';

import { Question } from '../Question';
import { RoomButton } from '../RoomButton';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';
import emptyQuestionsImg from '../../assets/images/empty-questions.svg';

import { Header, Main } from './styles';
import { AdminButtonStyles } from '../../UI/Button/styles';
import { CloseRoomModal } from '../CloseRoomModal';
import { DeleteQuestionModal } from '../DeleteQuestionModal';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId!);
  const [closeRoomModalIsOpen, setCloseRoomModalIsOpen] = useState(false);
  const [deleteQuestionModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const navigate = useNavigate();

  function openCloseRoomModal() {
    setCloseRoomModalIsOpen(true);
  }

  function closeRoomModal() {
    setCloseRoomModalIsOpen(false);
  }

  function openDeleteQuestionModal() {
    setDeleteModalIsOpen(true);
  }

  function closeDeleteQuestionModal() {
    setDeleteModalIsOpen(false);
  }

  async function handleCloseRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    navigate('/');
  }

  async function handleRemoveQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
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
                openCloseRoomModal();
              }}
            >
              Encerrar sessão
            </AdminButtonStyles>
          </div>
        </div>
        <CloseRoomModal
          modalIsOpen={closeRoomModalIsOpen}
          closeModal={closeRoomModal}
          handleCloseRoom={handleCloseRoom}
        />
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
            <>
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  className="delete-icon"
                  type="button"
                  onClick={() => openDeleteQuestionModal()}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5.99988H5H21"
                      stroke="#737380"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                      stroke="#737380"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Question>
              <DeleteQuestionModal
                key={0}
                deleteQuestionModalIsOpen={deleteQuestionModalIsOpen}
                closeModal={closeDeleteQuestionModal}
                handleRemoveQuestion={handleRemoveQuestion}
                questionId={question.id}
              />
            </>
          );
        })}
      </Main>
    </>
  );
}
