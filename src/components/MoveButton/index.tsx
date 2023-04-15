// type
import { IMoveButtonProps } from "./type";

// styled Component
import { Wrapper, ImageWrapper } from "./style";

const imageUrl = process.env.PUBLIC_URL + "/icons/leftArrow.png";

function MoveButton({ type, onClick }: IMoveButtonProps): JSX.Element {
  return (
    <Wrapper type={type} onClick={onClick}>
      <ImageWrapper draggable="false" src={imageUrl} />
    </Wrapper>
  );
}

export default MoveButton;
