import { Wrapper, Container, Buttons } from "./style"
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.div`
    width: 7px;
    height: 7px;
    border: 1px solid black;
    border-radius : 50%;
    background-color : #000;
    opacity : ${props => props.isCurrentSlide ? 1 : .35};
`;

function IndexButton({ currentIndex, imageSlidesInfo, moveSlide }) {
    return (
        <Wrapper>
            <Container>
                {imageSlidesInfo.map((imageSlide, index) =>
                    <Button key={imageSlide.name}
                        isCurrentSlide={currentIndex === index}
                        onClick={moveSlide(index)}
                    />
                )}
            </Container>
        </Wrapper>
    );
}

function Button({ isCurrentSlide, onClick }) {
    return (
        <ButtonWrapper isCurrentSlide={isCurrentSlide} onClick={onClick}>

        </ButtonWrapper>
    )
}

export default IndexButton;