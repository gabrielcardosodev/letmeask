import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import Button from '../Button/Button'

import logoImg from '../../assets/images/logo.svg'

import { Container } from "./styles";

export function ContentNewRoom() {
    const { user } = useAuth()
    return (
        <Container>
                <div>
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
        </Container>
    )
}

