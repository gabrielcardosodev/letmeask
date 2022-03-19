import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button/Button'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import { Container } from './styles'

export function Home() {
    const navigate = useNavigate();

    function navigateToNewRoom() {
        navigate("/rooms/new");
    }

  return(
    <Container>
        <aside>
            <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
            <strong>Toda pergunta tem uma resposta.</strong>
            <p>Aprenda a compartilhar conhecimento com outras pessoas.</p>
        </aside>
        <main>
            <div className='main-content'>
                <img src={logoImg} alt="Logo da Letmeask" />
                <button onClick={navigateToNewRoom}>
                    <img src={googleIconImg} alt="Logo do Google" />
                    Cria sua sala com o Google
                </button>
                <div className='separator'>ou entre em uma sala</div>
                <form>
                    <input 
                        type="text"
                        placeholder='Digite o código da sala'
                    />
                    <Button type="submit" />
                </form>
            </div>
        </main>
    </Container>
  )
}
