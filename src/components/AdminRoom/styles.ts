import styled from 'styled-components';

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      img {
        max-height: 45px;
      }
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 1rem;

      button {
        height: 3rem;
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .user {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--black);
    }

    span {
      margin-left: 1rem;
      background: var(--pink-dark);
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      color: var(--background);
      font-weight: 500;
      font-size: 1rem;
    }
  }

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 1rem;
      border: none;
      border-radius: 0.5rem;
      background: var(--details);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
      max-height: 300px;

      &:focus {
        outline: none;
        border: 1px solid var(--purple);
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        span {
          margin-left: 0.5rem;
          color: var(--black);
          font-weight: 500;
          font-size: 1rem;
        }
      }

      span {
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        color: var(--gray-dark);

        button {
          border: 0;
          height: 3rem;
          background: transparent;
          font-size: 1rem;
          font-weight: 500;
          color: var(--purple);
          text-decoration: underline;
          transition: color 0.2s;

          &:hover {
            color: var(--hover-purple);
          }
        }
      }
    }
  }

  .no-question {
    margin-top: 4.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-top: 1rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      color: var(--black);
    }

    p {
      margin-top: 0.5rem;
      color: var(--gray-dark);
    }
  }

  .delete-icon {
    transition: fill 0.2s;

    & > svg path:hover {
      stroke: var(--danger);
    }
  }
`;
