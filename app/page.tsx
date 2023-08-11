'use client'
import { useState, useEffect, SetStateAction } from 'react'

export default function Home() {

  const [inputValue, setInputValue] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleInputChange = (e: { target: { value: SetStateAction<number>; }; }) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < inputValue) {
          return prevProgress + 1;
        }else if(prevProgress>inputValue){
          if(prevProgress != inputValue){
            return prevProgress - 1;
          }
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [inputValue]);

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Progress Bar</h1>
      <input
        type="number"
        min="0"
        max="100"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 px-2 py-1 rounded-md mb-4"
      />
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
            Progress
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-teal-600">
            {progress}%
          </span>
        </div>
      </div>
      <div className="flex h-2 mb-4 relative bg-gray-200">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
        ></div>
      </div>
    </div>
  )
}
