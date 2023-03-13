import styled from 'styled-components';

const degreeByType = {
    left: 0,
    top: 90,
    right: 180,
    bottom: 270
}

export const Wrapper = styled.div`
    width : 50px;
    height: 50px;
    cursor : pointer;
    transform : rotate(${({ type }) => degreeByType[type] + "deg"});
`;

export const ImageWrapper = styled.img`
    width: 100%;
    height: 100%;
    display: block;
`