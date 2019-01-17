import React from 'react';
import './counter.css';

function Counter({count, increment, decrement}) {

    return <div className='counter-buttons'>
        <button
            className="decrement"
            onClick={decrement}
            disabled={count <= 0}>-
        </button>
        <h2>{count}</h2>
        <button
            className="increment"
            onClick={increment}>+
        </button>
    </div>;
}

export default Counter