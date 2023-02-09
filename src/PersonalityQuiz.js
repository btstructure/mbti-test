import React, { useState } from "react";

function PersonalityQuiz({ questionList }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectOption, setSelectedOption] = useState("");
  const [introvert, setIntrovert] = useState(0);
  const [extrovert, setExtrovert] = useState(0);
  const [intuitive, setIntuitive] = useState(0);
  const [sensing, setSensing] = useState(0);
  const [thinking, setThinking] = useState(0);
  const [feeling, setFeeling] = useState(0);
  const [judging, setJudging] = useState(0);
  const [perceiving, setPerceiving] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
  }

  function backButton(e) {
    e.preventDefault();
    if (currentQuestion === 0) {
      setCurrentQuestion(currentQuestion);
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function mbtiTest() {
    let first_letter = "";
    let second_letter = "";
    let third_letter = "";
    let fourth_letter = "";

    if (introvert > extrovert) {
      first_letter = "I";
    } else {
      first_letter = "E";
    }

    if (intuitive > sensing) {
      second_letter = "N";
    } else {
      second_letter = "S";
    }

    if (thinking > feeling) {
      third_letter = "T";
    } else {
      third_letter = "F";
    }

    if (judging > perceiving) {
      fourth_letter = "J";
    } else {
      fourth_letter = "P";
    }

    return first_letter + second_letter + third_letter + fourth_letter;
  }

  return (
    <form className="quiz">
      <h1 className="quiz-title">MBTI Quiz</h1>
      {currentQuestion < questionList.length ? (
        <div className="quiz-container">
          <p>{questionList[currentQuestion].question}</p>
          {questionList[currentQuestion].answers.map((answer) => {
            return (
              <div key={answer.id}>
                <input
                  className="choice"
                  type="radio"
                  name="choice"
                  value={answer.value}
                />
                {answer.answer}
              </div>
            );
          })}
          <div>
            <button className="button" onClick={backButton}>
              Back
            </button>
            <button className="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <p>Your MBTI result is: {mbtiTest()}</p>
      )}
    </form>
  );
}

export default PersonalityQuiz;
