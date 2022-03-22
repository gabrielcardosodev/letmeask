import { ButtonHTMLAttributes } from 'react';
import { ButtonStyles } from './styles';

import loginIconImg from '../../assets/images/login.svg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <ButtonStyles {...props}>
      <img src={loginIconImg} alt="Ícone de login" />
      Entrar em uma sala
    </ButtonStyles>
  );
}
