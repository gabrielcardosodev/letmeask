import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { ButtonStyles } from '../../UI/Button/styles';

import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import loginIconImg from '../../assets/images/login.svg';

import { Content } from './styles';

export function ContentHomePage() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate('/rooms/new');
  }
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
          <ButtonStyles type="submit">
            <img src={loginIconImg} alt="ícone de login" />
            Entrar em uma sala
          </ButtonStyles>
        </form>
      </div>
    </Content>
  );
}
