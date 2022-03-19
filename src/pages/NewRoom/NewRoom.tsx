import { Link } from 'react-router-dom'

import Button from '../../components/Button/Button'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'


import { Container } from './styles'
export function NewRoom () {
    return (
        <Container>
        <aside>
            <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
            <strong>Toda pergunta tem uma resposta.</strong>
            <p>Aprenda a compartilhar conhecimento com outras pessoas.</p>
        </aside>
        <main>
            <div className='main-content'>
                <img src={logoImg} alt="Logo da Letmeask" />
                <h2>Crie uma nova sala</h2>
                <form>
                    <input 
                        type="text"
                        placeholder='Nome da sala'
                    />
                    <Button type='submit'>
                        Criar sala
                    </Button>
                </form>
                <p>Quer entrar em uma sala já existente? <Link to='/'>Clique aqui</Link></p>
            </div>
        </main>
    </Container>
    )
}