import { useCounterStore } from './store/store';

const App: React.FC = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div style={{ "marginLeft": '400px' }}>
      <h1>Zustand Counter (TypeScript)</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>＋ Increment</button>
      <button onClick={decrement}>－ Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
