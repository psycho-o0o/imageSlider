// external Component
import ImageSlide from "../ImageSlide";

// styled Component
import { Wrapper, Container } from "./style";

// type
import { IImageSlidesProps } from "./type";

function ImageSlides({
  currentIndex,
  imageSlidesInfo,
}: IImageSlidesProps): JSX.Element {
  const [width, height] = [400, 300];

  return (
    <Wrapper width={width} height={height}>
      <Container width={width} currentIndex={currentIndex}>
        {imageSlidesInfo.map(({ name }, index: number) => (
          <ImageSlide key={index} name={name} width={width} height={height} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default ImageSlides;
