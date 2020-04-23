import React from "react";
import { ButtonStyle } from "./styles";

export interface Props {
  /**
   * Is the background color of button
   */
  backgroundColor?: string;
  /**
   * Is the font color of button
   */
  color?: string;
  /**
   * Define if button is outlined
   */
  outlined?: boolean;
  /**
   * Define if button is disabled
   */
  disabled?: boolean;
  /**
   * Click event
   */
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#FF8700",
  color = "#fff",
  outlined = false,
  ...props
}) => {
  return (
    <ButtonStyle
      outlined={outlined}
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};
