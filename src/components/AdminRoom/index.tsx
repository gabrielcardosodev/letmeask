import { Link, useParams } from 'react-router-dom';
import { useRoom } from '../../hooks/useRoom';

import { Question } from '../Question';
import { RoomButton } from '../RoomButton';

import logoImg from '../../assets/images/logo.svg';
import emptyQuestionsImg from '../../assets/images/empty-questions.svg';

import { Header, Main } from './styles';
import { AdminButtonStyles } from '../../UI/Button/styles';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId!);

  return (
    <>
      <Header>
        <div className="content">
          <Link to="/">
            <img src={logoImg} alt="Logo da Letmeask" />
          </Link>
          <div>
            <RoomButton code={roomId || ''} />
            <AdminButtonStyles>Encerrar sessão</AdminButtonStyles>
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
            />
          );
        })}
      </Main>
    </>
  );
}
