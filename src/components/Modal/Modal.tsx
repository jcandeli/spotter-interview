import styled from "@emotion/styled";
import React, { useEffect } from "react";
import Text from "../Text";
import Button from "../Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  children: React.ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: var(--modal-background-color);
  border-radius: 1rem;
  width: min(95vw, 460px);
`;

const ModalContent = styled.div`
  padding: 3rem 2rem;
  box-sizing: border-box;
`;

const ModalHeader = styled.header`
  background-color: var(--modal-heading-color);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 1.5rem 2rem;
  position: relative;
`;

export const Modal = ({ isOpen, onClose, heading, children }: ModalProps) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
    >
      <ModalContainer tabIndex={-1}>
        <ModalHeader>
          <Text
            variant="heading"
            as="h2"
            id="modal-heading"
            style={{ flexGrow: 1, textAlign: "center" }}
          >
            {heading}
          </Text>
          <Button
            onClick={onClose}
            variation="icon"
            icon="close"
            aria-label="Close modal"
            style={{ position: "absolute", top: 16, right: 16 }}
          />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};
