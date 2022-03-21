import { ButtonHTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

import { Button } from '../../components/Button/index'

import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import { Container } from './styles'
import { Aside } from '../../components/Aside/index'

export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom() {
         if (!user) {
            await signInWithGoogle()
        }

        navigate("/rooms/new");
    }

  return(
    <Container>
        <Aside />
        <main>
            <div className='main-content'>
                <img src={logoImg} alt="Logo da Letmeask" />
                <button onClick={handleCreateRoom}>
                    <img src={googleIconImg} alt="Logo do Google" />
                    Cria sua sala com o Google
                </button>
                <div className='separator'>ou entre em uma sala</div>
                <form>
                    <input 
                        type="text"
                        placeholder='Digite o código da sala'
                    />
                    <Button 
                          type="submit"
                    />
                </form>
            </div>
        </main>
    </Container>
  )
}
