'use client'
import React, { createContext, useState } from "react";
import Child from "./component/Child";

export default function Home() {
  const [children, setChildren] = useState([3, 1, 2]);

  function removeChild(removedId: number) {
    setChildren(children.filter((id) => id !== removedId));
  }

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      {children.map((id) => (
        <Child key={id} id={id} remove={removeChild} />
      ))}
    </div>
  );
}

