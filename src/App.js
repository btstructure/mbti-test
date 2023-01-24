import React, { useState, useEffect } from "react";
import Personality from "./Personality";

function App() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((data) => setQuestionList(data));
  }, []);

  
  return (
    <div>
      <div>
        <h1 className="flex justify-center text-3xl p-10">MBTI TEST</h1>
        <Personality questionList={questionList} />
      </div>
    </div>
  );
}

export default App;
