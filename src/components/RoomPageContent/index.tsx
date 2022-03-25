import { Link, useParams } from 'react-router-dom';

import { RoomButton } from '../RoomButton';
import { ButtonStyles } from '../../UI/Button/styles';

import logoImg from '../../assets/images/logo.svg';

import { Header, Main } from './styles';

type RoomParams = {
  id: string;
};

export function ContentRoomPage() {
  const { id } = useParams<RoomParams>();

  return (
    <>
      <Header>
        <div className="content">
          <img src={logoImg} alt="Logo da Letmeask" />
          <RoomButton code={id || ''} />
        </div>
      </Header>

      <Main>
        <div>
          <h1>Sala React Q&amp;A</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />
          <div>
            <span>
              Para enviar uma pergunta, <Link to="/">faça seu login.</Link>
            </span>
            <ButtonStyles type="submit">Enviar pergunta</ButtonStyles>
          </div>
        </form>
      </Main>
    </>
  );
}
