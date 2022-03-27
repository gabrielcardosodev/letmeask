import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 21rem;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    > h2 {
      margin: 4.2rem 0 1.7rem;
      font-size: 1.7rem;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
      color: var(--black);
    }

    form {
      input {
        height: 3rem;
        border-radius: 0.5rem;
        padding: 0 1rem;
        background: var(--background);
        border: 1px solid var(--gray-medium);

        &:focus {
          outline: none;
          border: 1px solid var(--purple);
        }
      }

      input,
      button {
        width: 100%;
      }

      button > img {
        display: none;
      }
    }

    p {
      font-size: 0.9rem;
      color: var(--gray-dark);
      margin-top: 1rem;

      a {
        color: var(--pink-dark);
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
