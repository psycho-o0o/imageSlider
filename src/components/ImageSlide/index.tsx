// type
import { ImageSlideProps } from "./type";

// styled Component
import { Wrapper, ImageWrapper } from "./style";

function ImageSlide({ name, width, height }: ImageSlideProps): JSX.Element {
  const imageUrl = process.env.PUBLIC_URL + "/images/" + name;
  return (
    <Wrapper width={width} height={height}>
      <ImageWrapper src={imageUrl} />
    </Wrapper>
  );
}

export default ImageSlide;
