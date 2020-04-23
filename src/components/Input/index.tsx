import React from "react";
import { Label } from "./styles";

export interface Props {
  /**
   * Input name
   */
  name?: string;
  /**
   * Type of input
   */
  type?: string;
  /**
   * The placeholder of input
   */
  placeholder?: string;
  /**
   * Is the background color of input
   */
  backgroundColor?: string;
  /**
   * Defines input font color
   */
  color?: string;
  /**
   * Current value of input
   */
  value?: string;
  /**
   * Set a new value for a input
   */
  setValue: (text: string) => void;
  /**
   * Defines a icon for input
   */
  icon?: React.ReactNode | React.Component;
}

export interface ILabel {
  icon?: React.ReactNode | React.Component;
}

export const Input: React.FC<Props> = ({
  name,
  type = "text",
  placeholder,
  color = "#FFF",
  value,
  setValue,
  icon,
}) => {
  return (
    <Label htmlFor={name} color={color} icon={icon}>
      <input
        name={name}
        aria-label={name}
        type={type}
        placeholder={placeholder}
        value={value}
        color={color}
        onChange={(e) => setValue(e.target.value)}
      />
      {icon && icon}
    </Label>
  );
};
