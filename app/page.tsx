'use client'
import { useCallback,useState } from "react";

const functionsCounter = new Set();

const howManyFunctionCalled = (fn) => {
  functionsCounter.add(fn);
  console.log(functionsCounter.size);
};

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter + 1);
    howManyFunctionCalled(increment);
    console.log("Inc");
  }, [counter]);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
    howManyFunctionCalled(decrement);
    console.log("Dec");
  }, [counter]);

  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter - 1);
    howManyFunctionCalled(incrementOtherCounter);
    console.log("IncOthC");
  }, [otherCounter]);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h3>Counter Value:{counter}</h3>
      <h3>Other CounterValue:{otherCounter}</h3>
      <h3>{`No of function calls: ${functionsCounter.size}`}</h3>
      <button className="bg-red-500 rounded-full m-5" onClick={decrement}>Decrement -</button>
      <button className="bg-green-500 rounded-full m-5" onClick={increment}>Increment +</button>
      <button className="bg-blue-500 rounded-full m-5" onClick={incrementOtherCounter}>IncrementOtherCounter +</button>
    </div>
  );
}

