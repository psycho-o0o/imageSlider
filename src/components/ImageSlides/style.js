import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
`;

export const Container = styled.section`
  width: 10000px;
  display: flex;
  transform: translateX(
    ${({ width, currentIndex }) => -width * currentIndex}px
  );
  transition: transform 0.5s ease;
`;
