import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black text-white">
      <Link to="/">Home</Link>
      <ul>
        <li>
          <Link to="/mbti-test">MBTI Test </Link>
        </li>
        <li>
          <Link to="mbti-personalities">MBTI Personalities</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
