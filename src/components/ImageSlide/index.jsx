import { Wrapper, ImageWrapper } from "./style";

function ImageSlide({ name, width, height }) {
  const imageUrl = process.env.PUBLIC_URL + "/images/" + name;
  return (
    <Wrapper width={width} height={height}>
      <ImageWrapper src={imageUrl} />
    </Wrapper>
  );
}

export default ImageSlide;
