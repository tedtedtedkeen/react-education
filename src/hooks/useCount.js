import React, { useCallback, useState } from "react";

export const useCount = (init) => {
  const [count, setCount] = useState(init);
  const decrement = useCallback(() => setCount(cur => cur - 1), []);
  const increment = useCallback(() => setCount(cur => cur + 1), []);
  return {
    count, decrement, increment
  };
};