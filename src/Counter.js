// import the necessary dependencies
import React, { useState } from 'react';
import "./counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
       setCount(count - 1); 
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className='section'>
            <h1>Count: {count}</h1>
            <button className='increment' onClick={increment}>Increment</button>
            <button className='decrement' onClick={decrement}>Decrement</button>
            <button className='reset' onClick={reset}>Reset</button>
        </div>
    );
} 

export default Counter;