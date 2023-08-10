'use client'
import { useState } from 'react'

export default function Home() {
  const [value,setValue] = useState(false);
  const changeState =()=>{
    setValue(!value);
  }
  return (
    <div className='h-screen bg-gray-200 w-full flex justify-center items-center'>
      <button onClick={changeState} className='text-green-500 mr-5'>Show/Hide</button>
      <p className={`${value ? 'invisible': ''}`}>welcome to react challenges</p>
    </div>
  )
}
