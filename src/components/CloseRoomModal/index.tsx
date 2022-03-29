import Modal from 'react-modal';

import iconCloseModalImg from '../../assets/images/close-modal.svg';

import {
  ButtonCancelStyles,
  ButtonDeleteRoomStyles,
} from '../../UI/Button/styles';

import { CloseRoomModalContainer } from './styles';

type CloseRoomModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  handleCloseRoom: () => void;
};

export function CloseRoomModal({
  modalIsOpen,
  closeModal,
  handleCloseRoom,
}: CloseRoomModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className={'react-modal-content'}
    >
      <CloseRoomModalContainer>
        <img src={iconCloseModalImg} alt="Icone de fechar" />
        <h1>Encerrar sala</h1>
        <p>Tem certeza que você deseja encerrar esta sala?</p>
        <div>
          <ButtonCancelStyles onClick={closeModal}>Cancelar</ButtonCancelStyles>
          <ButtonDeleteRoomStyles onClick={handleCloseRoom}>
            Sim, encerrar
          </ButtonDeleteRoomStyles>
        </div>
      </CloseRoomModalContainer>
    </Modal>
  );
}
