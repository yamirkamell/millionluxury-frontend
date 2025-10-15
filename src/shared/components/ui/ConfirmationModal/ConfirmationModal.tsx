import React from 'react';
import { Modal } from '../Modal';
import { ConfirmationContent, ConfirmationTitle, ConfirmationMessage, ButtonGroup, ConfirmButton, CancelButton } from './ConfirmationModal.styled';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info';
  loading?: boolean;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  variant = 'danger',
  loading = false,
}) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      size="small"
    >
      <ConfirmationContent>
        <ConfirmationTitle variant={variant}>
          {title}
        </ConfirmationTitle>
        <ConfirmationMessage>
          {message}
        </ConfirmationMessage>
        <ButtonGroup>
          <CancelButton
            type="button"
            onClick={onClose}
            disabled={loading}
          >
            {cancelText}
          </CancelButton>
          <ConfirmButton
            type="button"
            variant={variant}
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? 'Eliminando...' : confirmText}
          </ConfirmButton>
        </ButtonGroup>
      </ConfirmationContent>
    </Modal>
  );
};
