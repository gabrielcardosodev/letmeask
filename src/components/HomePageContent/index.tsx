import { Button } from '../Button';

import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { Content } from './styles';

interface HomePageContentProps {
  handleCreateRoom: () => void;
}

export function ContentHomePage({ handleCreateRoom }: HomePageContentProps) {
  return (
    <Content>
      <div className="main-content">
        <img src={logoImg} alt="Logo da Letmeask" />
        <button onClick={handleCreateRoom}>
          <img src={googleIconImg} alt="Logo do Google" />
          Cria sua sala com o Google
        </button>
        <div className="separator">ou entre em uma sala</div>
        <form>
          <input type="text" placeholder="Digite o código da sala" />
          <Button type="submit" />
        </form>
      </div>
    </Content>
  );
}
