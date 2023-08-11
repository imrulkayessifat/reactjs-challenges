'use client'
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  let [len,setLen] = useState<number>(0);
  const [value,setValue] = useState<string>('');
  const addI = () => {
    setLen(len+1);
  }
  useEffect(() => {
    let count: number = 10;
    const interval = setInterval(() => {
      setValue(count.toString());
      count--;
      if (count < 0) {
        clearInterval(interval);
        if (buttonRef.current) {
          buttonRef.current.style.display = "none";
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-screen bg-gray-200 w-full flex flex-col justify-center items-center">
      <p className="text-red-500">{len}</p>
      <p className="text-gray-500">{value}</p>
      <button onClick={()=>addI()} className="w-10 h-10" ref={buttonRef}>+</button>
    </div>
  )
}
