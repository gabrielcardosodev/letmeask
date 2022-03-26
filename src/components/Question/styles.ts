import styled from 'styled-components';

export const Container = styled.div`
  background: var(--details);
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 1.6rem;
  margin-top: 2.2rem;

  & + & {
    margin-top: 0.5rem;
  }

  p {
    color: var(--black);
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.6rem;

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
        color: var(--grey-dark);
        font-size: 1rem;
      }
    }
  }
`;
