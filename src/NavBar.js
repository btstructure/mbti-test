import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import brain from "./icons8-brains-64.png";

function NavBar() {
  return (
    <nav className="nav-bar">
      <img src={brain} alt="brain" className="brain" />
      <ul className="nav-ul">
        <li className="nav-list">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list">
          <Link to="/mbti-test">MBTI Quiz</Link>
        </li>
        <li className="nav-list">
          <Link to="mbti-personalities">MBTI Personalities</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
