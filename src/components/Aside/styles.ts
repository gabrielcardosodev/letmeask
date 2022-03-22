import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;

  background: var(--purple);
  color: #ffffff;

  padding: 8rem 5rem;

  img {
    max-width: 320px;
    width: 100%;
  }

  strong {
    margin-top: 1rem;
    font: 700 2rem 'Poppins', sans-serif;
    line-height: 3rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: var(--background);
  }
`;
