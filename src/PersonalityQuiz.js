import React, { useState } from "react";

function PersonalityQuiz({ questionList }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [introvert, setIntrovert] = useState(0);
  const [extrovert, setExtrovert] = useState(0);
  const [intuitive, setIntuitive] = useState(0);
  const [sensing, setSensing] = useState(0);
  const [thinking, setThinking] = useState(0);
  const [feeling, setFeeling] = useState(0);
  const [judging, setJudging] = useState(0);
  const [perceiving, setPerceiving] = useState(0);

  const handleSubmit = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz">
      <h1 className="quiz-title">MBTI Quiz</h1>
      <p className="quiz-container">
        <p>{questionList[currentQuestion].question}</p>
        {questionList[currentQuestion].answers.map((answer) => {
          return (
            <div>
              <input className="choice" type="radio" name="choice" />
              {answer.answer}
            </div>
          );
        })}
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </p>
    </div>
  );
}

export default PersonalityQuiz;
