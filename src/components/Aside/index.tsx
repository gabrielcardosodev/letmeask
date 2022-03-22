import illustrationImg from '../../assets/images/illustration.svg';

import { Container } from './styles';

export function Aside() {
  return (
    <Container>
      <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
      <strong>Toda pergunta tem uma resposta.</strong>
      <p>Aprenda a compartilhar conhecimento com outras pessoas.</p>
    </Container>
  );
}
