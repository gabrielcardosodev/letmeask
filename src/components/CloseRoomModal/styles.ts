import styled from 'styled-components';

export const CloseRoomModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--black);
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    color: var(--gray-dark);
    margin-top: 0.8rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
    margin-top: 2.6rem;
  }
`;
