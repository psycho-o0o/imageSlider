// functional Package
import { useState, useCallback } from "react";

// external Component
import MoveButton from "../../components/MoveButton";
import ImageSlides from "../../components/ImageSlides";
import IndexButton from "../../components/IndexButton";

// styled Component
import { Wrapper, Container } from "./style";

// type
import { IImageSlideInfo, moveSlideType } from "./type";

const imageSlidesInfo: IImageSlideInfo[] = [
  {
    name: "image1.jpg",
  },
  {
    name: "image2.jpg",
  },
  {
    name: "image3.jpg",
  },
  {
    name: "image4.jpg",
  },
  {
    name: "image5.jpg",
  },
];
const { length } = imageSlidesInfo;

function ImageSlider() {
  // state
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // hook
  const moveSlide = useCallback<moveSlideType>(
    (to) => () => {
      if (to === -1) setCurrentIndex(length - 1);
      else if (to === length) setCurrentIndex(0);
      else setCurrentIndex(to);
    },
    []
  );

  return (
    <Wrapper>
      <Container>
        <div>
          <MoveButton type="left" onClick={moveSlide(currentIndex - 1)} />
          <ImageSlides
            currentIndex={currentIndex}
            imageSlidesInfo={imageSlidesInfo}
          />
          <MoveButton type="right" onClick={moveSlide(currentIndex + 1)} />
        </div>
        <IndexButton
          currentIndex={currentIndex}
          imageSlidesInfo={imageSlidesInfo}
          moveSlide={moveSlide}
        />
      </Container>
    </Wrapper>
  );
}

export default ImageSlider;
