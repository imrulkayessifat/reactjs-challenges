'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className='h-screen bg-gray-200 w-full flex flex-col justify-center items-center'>
      <div className='flex flex-row'>
        <span className="font-bold">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="font-bold">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
      </div>
      <div>
        <button className='mr-5 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded' onClick={handleStart}>Start</button>
        <button className='mr-5 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={handlePauseResume}>{isPaused ? "Resume" : "Pause"}</button>
        <button className='bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
