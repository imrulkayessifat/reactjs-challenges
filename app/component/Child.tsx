import React from 'react'
interface BtnProps {
    remove: (removeId: number) => void;
    id: number
}
const Child: React.FC<BtnProps> = ({ remove, id }) => {
    return (
        <button className='rounded-full bg-red-500 px-4 py-2 mb-5' onClick={() => remove(id)}>I'm the child {id}. Click to remove me!</button>
    );
}

export default Child