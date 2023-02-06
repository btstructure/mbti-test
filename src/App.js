import React, { useState, useEffect } from "react";
import PersonalityQuiz from "./PersonalityQuiz";
import Home from "./Home";
import NavBar from "./NavBar";
import PersonalityList from "./PersonalityList";
import { Route, Routes } from "react-router-dom";
import "./App.css"

function App() {
  const [questionList, setQuestionList] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((data) => setQuestionList(data));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="mbti-test"
          element={<PersonalityQuiz questionList={questionList} />}
        />
        <Route path="mbti-personalities" element={<PersonalityList />} />
      </Routes>
    </>
  );
}

export default App;
