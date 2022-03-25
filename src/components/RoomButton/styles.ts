import styled from 'styled-components';

export const RoomButtonStyles = styled.button`
  border-radius: 0.5rem;
  overflow: hidden;

  background: #ffffff;
  border: 1px solid var(--purple);
  cursor: pointer;

  display: flex;

  div {
    height: 40px;
    background: var(--purple);
    padding: 0 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.8rem;
    width: 230px;
    font-size: 14px;
    font-weight: 500;
  }
`;
