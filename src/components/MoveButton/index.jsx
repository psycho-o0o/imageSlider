import { useCallback } from "react";
import { Wrapper, ImageWrapper } from "./style";
const imageUrl = process.env.PUBLIC_URL + "/icons/leftArrow.png";

function MoveButton({ type, moveSlide }) {
  return (
    <Wrapper type={type} onClick={moveSlide}>
      <ImageWrapper draggable="false" src={imageUrl} />
    </Wrapper>
  );
}

export default MoveButton;
