import { useState } from "react";
import { Button } from "./components";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementValue = () => {
    setCount((prevValue) => prevValue + 1);
  };
  const decrementValue = () => {
    setCount((prevValue) => prevValue - 1);
  };

  return (
    <>
      <div>{count}</div>
      <div>
        <Button sign="-" handleButtonClick={decrementValue} />
        <Button sign="+" handleButtonClick={incrementValue} />
      </div>
    </>
  );
};
