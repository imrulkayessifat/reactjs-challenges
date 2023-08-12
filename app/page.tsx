'use client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Setting from "./component/Setting";
import Profile from "./component/Profile";
import Error from "./not-found";
export default function Home() {
  return (
    <Router>
      <ul className="flex m-5 p-5">
        <li className="p-5">
          <Link to="/setting">Setting</Link>
        </li>
        <li className="p-5">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}
