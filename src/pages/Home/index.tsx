import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { Aside } from '../../components/Aside/index';
import { ContentHomePage } from '../../components/HomePageContent';

import { Container } from '../../styles/global';

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate('/rooms/new');
  }

  return (
    <Container>
      <Aside />
      <ContentHomePage handleCreateRoom={handleCreateRoom} />
    </Container>
  );
}
