import { useState } from "react"

const counterStyles = {
    border: '4px solid red',
    padding: '15px',
    margin: '15px',
    borderRadius: '15px'
}

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const addCount = count + 1;
        setCount(addCount);
    }

    const handleRemove = () => {
        const removeCount = count - 1;
        setCount(removeCount);
    }

    return (
        <div style={counterStyles}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add to count</button>
            <button onClick={handleRemove}>Remove from count</button>
        </div>
    )
}