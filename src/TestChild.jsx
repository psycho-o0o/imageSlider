import { useRef } from "react";

function TestChild() {
    const count = useRef(0);
    return (
        <div>
            {count.current++}
        </div>
    )
}

export default TestChild;