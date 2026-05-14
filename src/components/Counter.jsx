import useCounterStore from "../stores/counterStore";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
