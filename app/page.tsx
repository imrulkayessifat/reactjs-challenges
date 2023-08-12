'use client'
import Image from "next/image"
import img from '@/public/image.jpg';
export default function Home() {


  return (
    <div className=" bg-gray-200 w-full flex flex-col justify-center items-center">
      <Image src={img} alt={""} />
      <Image src={img} alt={""} />
      <Image src={img} alt={""} />
      <Image src={img} alt={""} />
      <Image src={img} alt={""} />
      <Image src={img} alt={""} />
      <Image src={img} alt={""} />
    </div>
  )
}
