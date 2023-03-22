import styled from "styled-components";
import { IButtonWrapperProps } from "./type";

export const ButtonWrapper = styled.div<IButtonWrapperProps>`
  width: 7px;
  height: 7px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #000;
  opacity: ${(props) => (props.isCurrentSlide ? 1 : 0.35)};
`;
