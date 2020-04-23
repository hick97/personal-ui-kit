import React from "react";

import { FullScreen, Container, Close } from "./styles";

interface Props {
  /**
   * Defines if modal is open
   */
  open: boolean;
  /**
   * Defines a function to open the modal
   */
  setOpen: (newValue: boolean) => void;
  /**
   * Defines the modal title
   */
  title: string;
}

export interface IFullScreen {
  open: boolean;
}

export const Modal: React.FC<Props> = ({
  open,
  setOpen,
  title,
  children,
  ...props
}) => {
  return (
    <FullScreen open={open}>
      <Container {...props} title={title}>
        <Close onClick={() => setOpen(false)}>X</Close>

        <h2>{title}</h2>

        {children}
      </Container>
    </FullScreen>
  );
};
