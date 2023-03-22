export interface IImageSlideInfo {
  name: string;
}

export type moveSlideType = (to: number) => () => void;
