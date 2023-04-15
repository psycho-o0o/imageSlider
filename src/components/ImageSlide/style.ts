import styled from "styled-components";
import { IWrapper } from "./type";

export const Wrapper = styled.article<IWrapper>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
export const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
`;
