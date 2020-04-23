// @ts-nocheck
import React, { forwardRef } from "react";

import { Label, Radio, Mark } from "./styles";

export interface Props {
  /**
   * Defines a label for input
   */
  label: string;
  /**
   * Defines a name for input
   */
  name: string;
  /**
   * Defines a value for input
   */
  value: any;
  /**
   * Defines a background color for input label
   */
  color?: string;
  /**
   * Defines a default value (boolean) to input
   */
  defaultChecked?: boolean;
  /**
   * Defines if input is checked or not
   */
  checked?: boolean;
  /**
   * Defines if input has a onChange function
   */
  readOnly?: boolean;
  /**
   * Define a onChange function
   */
  onChange?: () => void;
}

const RadioWrapper = forwardRef(
  ({ label, name, value, color = "#FF8700", ...props }: Props, ref) => {
    const { readOnly, onChange } = props;

    return (
      <Label
        onClick={readOnly ? () => {} : onChange}
        htmlFor={name}
        color={color}
      >
        {label}

        <Radio {...props} ref={ref} name={name} value={value} />
        <Mark />
      </Label>
    );
  }
);

export { RadioWrapper as Radio };
