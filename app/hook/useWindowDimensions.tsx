import React, { useEffect, useState } from 'react'

const useWindowDimensions = () => {
  const [dim,setDim] = useState<string>('');
  useEffect(()=>{
    const getSize = () => {
        setDim("Window width : "+window.innerWidth.toString()+" "+"Window height : "+window.innerHeight.toString());
    }
    window.addEventListener('resize',getSize);
    return () => {
        window.removeEventListener('resize', getSize);
    };
  },[])
  return dim;
}

export default useWindowDimensions