import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(10);
  const increaseBy = (num: number) => {
    setCount(count + num);
  };
  const decreaseBy = (num: number) => {
    setCount(Math.max(count - num, 0));
  };
  return {
    count,
    increaseBy,
    decreaseBy,
  };
};
