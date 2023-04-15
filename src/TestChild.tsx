import { useRef } from "react";

function TestChild(): JSX.Element {
  const count = useRef(0);
  return <div>{count.current++}</div>;
}

export default TestChild;
