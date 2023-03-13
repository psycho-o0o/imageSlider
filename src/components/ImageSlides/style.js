import styled from 'styled-components';

export const Wrapper = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    overflow: hidden;
`

export const Container = styled.section`
    width: 10000px;
    display : flex;
    transition : transform .5s ease;
    transform : translateX(${({ width, currentIndex }) => -width * currentIndex}px);
`