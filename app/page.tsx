'use client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Employee from "./component/Employee";
import Ids from "./component/Ids";
export default function Home() {
  return (
    <Router>
      <ul className="flex m-5 p-5">
        <li className="p-5">
          <Link to="/ram">Ram</Link>
        </li>
        <li className="p-5">
          <Link to="/rakshman">Lakshman</Link>
        </li>
        <li className="p-5">
          <Link to="/bheem">Bheem</Link>
        </li>
      </ul>

      <ul className="flex m-5 p-5">
        <li className="p-5">
          <Link to="/Idss/1">1</Link>
        </li>
        <li className="p-5">
          <Link to="/Idss/2">2</Link>
        </li>
        <li className="p-5">
          <Link to="/Idss/3">3</Link>
        </li>
        <li className="p-5">
          <Link to="/Idss/4">4</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/:name" element={<Employee />} />
        <Route path="/Idss/:id" element={<Ids />} />
      </Routes>
    </Router>
  )
}
