import { useState, useCallback } from "react";
import TestChild from './TestChild';

function Test() {
    const [value, setValue] = useState(0);
    const onClick = useCallback(() => {
        setValue(value + 1);
    }, [value]);
    return (
        <div>
            <button onClick={onClick}>
                {value}
            </button>
            <TestChild />
        </div>
    )
}

export default Test;