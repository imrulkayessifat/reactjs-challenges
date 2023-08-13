'use client'
import useFetch from "./hook/useFetch";

export default function Home() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data)
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}
