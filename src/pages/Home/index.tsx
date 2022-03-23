import { Aside } from '../../components/Aside/index';
import { ContentHomePage } from '../../components/HomePageContent';

import { Container } from '../../styles/global';

export function Home() {
  return (
    <Container>
      <Aside />
      <ContentHomePage />
    </Container>
  );
}
