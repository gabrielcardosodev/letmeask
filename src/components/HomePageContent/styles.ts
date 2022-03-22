import styled from 'styled-components';

export const Content = styled.main`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 21rem;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    > button {
      margin-top: 4rem;
      height: 3rem;
      background-color: #ea4335;
      color: var(--details);
      font-weight: 500;
      border: 0;
      border-radius: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: filter 0.2s;

      img {
        margin-right: 0.5rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    .separator {
      font-size: 0.9rem;
      color: var(--gray-medium);

      margin: 2rem 0;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--gray-medium);
        margin-right: 1rem;
      }

      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--gray-medium);
        margin-left: 1rem;
      }
    }

    form {
      input {
        height: 3rem;
        border-radius: 0.5rem;
        padding: 0 1rem;
        background: var(--background);
        border: 1px solid var(--gray-medium);
      }

      input,
      button {
        width: 100%;
      }
    }
  }
`;
