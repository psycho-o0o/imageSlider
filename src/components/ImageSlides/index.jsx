import ImageSlide from "../ImageSlide";
import { Wrapper, Container } from "./style";

function ImageSlides({ currentIndex, imageSlidesInfo }) {
    const [width, height] = [400, 300];

    return (
        <Wrapper width={width} height={height}>
            <Container width={width} currentIndex={3}>{
                imageSlidesInfo.map(({ name }, index) =>
                    <ImageSlide key={index} name={name} width={width} height={height} />
                )
            }</Container>
        </Wrapper>
    );
}

export default ImageSlides;