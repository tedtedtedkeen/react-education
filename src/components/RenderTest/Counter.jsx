import React from 'react';
import { useCount } from '../../hooks/useCount';

const Counter = () => {

  const { count, decrement, increment } = useCount(0);

  return (
    <div>
      <h4>
        { count }
      </h4>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

export default Counter;