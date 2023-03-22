// type
import { IProps } from "./type";

// styled Component
import { ButtonWrapper } from "./style";

function CircleButton({ isCurrentSlide, onClick }: IProps) {
  return (
    <ButtonWrapper
      isCurrentSlide={isCurrentSlide}
      onClick={onClick}
    ></ButtonWrapper>
  );
}

export default CircleButton;
