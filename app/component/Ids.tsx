import React from 'react'
import { useParams } from 'react-router-dom';
const Ids = () => {
    const { id } = useParams();

    return (
      <div className="m-5 p-5">
        <h3>IDs: {id}</h3>
      </div>
    );
}

export default Ids