import styled from "styled-components";

export const Wrapper = styled.main`
  display: inline-block;
`;

export const Container = styled.section`
  & > div:first-child {
    display: flex;
    align-items: center;
  }
`;
