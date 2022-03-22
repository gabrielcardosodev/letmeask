import { Aside } from '../../components/Aside/index';
import { ContentNewRoom } from '../../components/CreateNewRoom/index';

import { Container } from '../../styles/global';

export function NewRoom() {
  return (
    <Container>
      <Aside />
      <ContentNewRoom />
    </Container>
  );
}
