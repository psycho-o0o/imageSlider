import {
  moveSlideType,
  IImageSlideInfo,
} from "./../../containers/ImageSlider/type.d";

export interface IndexButtonProps {
  currentIndex: number;
  imageSlidesInfo: IImageSlideInfo[];
  moveSlide: moveSlideType;
}
