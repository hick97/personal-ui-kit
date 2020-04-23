import styled from "styled-components";

import { Props } from "./index";

export const ButtonStyle = styled.button`
  width: 192px;
  height: 66px;
  background-color: ${({ backgroundColor, outlined }: Props) =>
    outlined ? "transparent" : backgroundColor};
  color: ${({ color }: Props) => color};
  border: ${({ outlined }: Props) => (outlined ? "1px solid #FF8700" : 0)};
  padding: 18px 45px;
  border-radius: 5px;

  font-weight: bold;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: #ff931a;
  }
  &:active {
    background-color: #e67a00;
  }

  &:disabled {
    opacity: 0.7;
    background-color: #cc6c00;
    cursor: not-allowed;
  }
`;
