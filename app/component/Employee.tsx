import React from 'react'
import { useParams } from 'react-router-dom';
const Employee = () => {
    const { name } = useParams();

    return (
      <div className="m-5 p-5">
        <h3>Employee: {name}</h3>
      </div>
    );
}

export default Employee