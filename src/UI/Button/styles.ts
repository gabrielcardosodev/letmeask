import styled from 'styled-components';

export const ButtonStyles = styled.button`
  margin-top: 1rem;
  padding: 0 2rem;
  height: 3rem;
  background-color: var(--purple);
  color: var(--details);
  font-weight: 500;
  border: 0;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  img {
    margin-right: 0.5rem;
  }

  &:not(:disabled):hover {
    background-color: var(--hover-purple);
  }

  &:disabled {
    opacity: 0.6;
  }
`;

export const AdminButtonStyles = styled(ButtonStyles)`
  background-color: var(--background);
  border: 1px solid var(--purple);
  color: var(--purple);
  transition: 0.2s;
  margin-top: 0;

  &:not(:disabled):hover {
    background-color: transparent;
    color: var(--hover-purple);
    border-color: var(--hover-purple);
  }
`;

export const ButtonCancelStyles = styled(ButtonStyles)`
  background-color: var(--gray-light);
  border: none;
  color: var(--gray-dark);
  transition: 0.2s;
  margin-top: 0;

  &:not(:disabled):hover {
    background-color: var(--hover-gray-light);
    color: none;
  }
`;

export const ButtonDeleteRoomStyles = styled(ButtonStyles)`
  background-color: var(--danger);
  color: var(--details);
  transition: 0.2s;
  margin-top: 0;

  &:not(:disabled):hover {
    background-color: var(--hover-danger);
    color: none;
  }
`;
