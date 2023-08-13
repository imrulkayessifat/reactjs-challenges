'use client'

import useWindowDimensions from "./hook/useWindowDimensions"
export default function Home() {
  const dim = useWindowDimensions()
  console.log(dim);
  return (
    <div>
      
    </div>
  )
}
