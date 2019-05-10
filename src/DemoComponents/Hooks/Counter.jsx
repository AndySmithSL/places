import React, { useState, useEffect } from 'react';

function Counter({ initialCount }) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(initialCount); // useState is a State Hook -> lets us add local state to functional components (remember before functional components were stateless)

    useEffect(() => { 
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </div>
    );
}

export default Counter;
