// External Component
import Button from "../../shared/component/CircleButton";

// type
import { IndexButtonProps } from "./type";

// styled Component
import { Wrapper, Container } from "./style";

function IndexButton({
  currentIndex,
  imageSlidesInfo,
  moveSlide,
}: IndexButtonProps): JSX.Element {
  return (
    <Wrapper>
      <Container>
        {imageSlidesInfo.map((imageSlide, index: number) => (
          <Button
            key={imageSlide.name}
            isCurrentSlide={currentIndex === index}
            onClick={moveSlide(index)}
          />
        ))}
      </Container>
    </Wrapper>
  );
}

export default IndexButton;
