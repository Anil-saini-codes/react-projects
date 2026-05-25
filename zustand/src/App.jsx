import useCounterStore from "./store/useCounterStore";

function App() {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default App;
