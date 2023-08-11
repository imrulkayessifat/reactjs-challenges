'use client'
import { todo } from 'node:test';
import { useState, useEffect } from 'react'

export default function Home() {
  const [name, setName] = useState<string>('');
  const [arrayState, setArrayState] = useState<string[]>([]);

  const addItem = (item: string) => {
    setArrayState([...arrayState, item]);
    setName('');
  };

  const removeItem = (index: number) => {
    const newArray = arrayState.filter((_, i) => i !== index);
    setArrayState(newArray);
  };

  return (
    <div>

      <div className="flex items-center border-b py-2">
        <input value={name} onChange={(e) => setName(e.target.value)} className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" type="text" aria-label="Full name" />
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ml-5 rounded focus:outline-none focus:ring focus:border-blue-300' onClick={() => addItem(name)}>Add Item</button>
      </div>
      <ul>
        {arrayState.map((item, index) => (
          <li className='flex m-3' key={index}>
            <p className='text-gray-700 text-base leading-6'>{item}</p>
            <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 ml-5 rounded focus:outline-none focus:ring focus:border-red-300' onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
