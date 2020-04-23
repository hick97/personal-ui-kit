import styled from "styled-components";

import { ILabel } from "./index";

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;
  margin-bottom: 2rem;

  input {
    width: 392px;

    background-color: #1e1e1e;
    border: 2px solid #373737;
    border-radius: 5px;
    color: ${(props) => props.color};

    padding: 16px;
    padding-left: ${(props) => (props.icon ? "45px" : "16px")};

    font-size: 16px;
    font-weight: bold;

    transition: 180ms ease-in-out;

    ~ svg {
      fill: rgb(93, 93, 93);
      position: absolute;
      left: 14px;
      top: 17px;
      width: 19px;
      height: 19px;
      transition: 180ms ease-in-out;
    }

    &::placeholder {
      color: #5d5d5d;
    }

    &:focus {
      border: 2px solid #ff8700;

      ~ svg {
        fill: rgb(255, 135, 0);
      }
    }
  }
`;
