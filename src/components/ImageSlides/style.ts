import styled from "styled-components";
import { IWrapper, IContainer } from "./type";

export const Wrapper = styled.div<IWrapper>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
`;

export const Container = styled.section<IContainer>`
  width: 10000px;
  display: flex;
  transform: translateX(
    ${({ width, currentIndex }) => -width * currentIndex}px
  );
  transition: transform 0.5s ease;
`;
