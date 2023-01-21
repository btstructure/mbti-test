import React, { useState, useEffect } from "react";
import Personality from "./Personality";


function App() {
  const [questions, setQuestions] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="flex justify-center text-3xl p-10">MBTI TEST</h1>
        <Personality questions={questions} />
      </div>
    </div>
  );
}

export default App;
