'use client'

import usePageBottom from "./hook/usePageBottom";

export default function Home() {
  const isPageBottom = usePageBottom();
  console.log(isPageBottom)
  let arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50"
  ];
  return (
    <div>
      {arr.map((num, index) => (
        <div key={index}>
          <h2>{num} </h2>
          <p>{isPageBottom.toString()}</p>
        </div>
      ))}
    </div>
  )
}
