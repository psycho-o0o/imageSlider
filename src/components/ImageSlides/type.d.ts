import { IImageSlideInfo } from "./../../containers/ImageSlider/type.d";

// Component Type
export interface IImageSlidesProps {
  currentIndex: number;
  imageSlidesInfo: IImageSlideInfo[];
}

// Style Type
export interface IWrapper {
  width: number;
  height: number;
}

export interface IContainer {
  width: number;
  currentIndex: number;
}
