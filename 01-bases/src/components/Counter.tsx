import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { count, increaseBy, decreaseBy } = useCounter();

  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>
      <div>
        <button
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 hover:bg-blue-700"
          onClick={() => increaseBy(+1)}
        >
          +1
        </button>
        <button
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 hover:bg-blue-700"
          onClick={() => decreaseBy(1)}
        >
          -1
        </button>
      </div>
    </>
  );
};
