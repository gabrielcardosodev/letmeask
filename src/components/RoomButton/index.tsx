import copyImg from '../../assets/images/copy.svg';

import { RoomButtonStyles } from './styles';

type RoomCodeProps = {
  code: string;
};

export function RoomButton(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <RoomButtonStyles onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Ícone de copiar" />
      </div>
      <span>Sala #{props.code}</span>
    </RoomButtonStyles>
  );
}
