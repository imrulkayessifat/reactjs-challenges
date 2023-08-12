'use client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./component/form";
import About from "./component/about";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}
