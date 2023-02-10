import React, { useState, useEffect } from "react";

function PersonalityQuiz({ questionList }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [personalityType, setPersonalityType] = useState("");
  const [eI, setEI] = useState(0);
  const [sN, setSN] = useState(0);
  const [tF, setTF] = useState(0);
  const [jP, setJP] = useState(0);
  


  function handleSubmit(e) {
    e.preventDefault();

    let selectedRadio = document.querySelector("input[name='answer']:checked");
    if (!selectedRadio) return;

    let selectedValue = selectedRadio.getAttribute("data-value");

    switch (selectedValue) {
      case "E":
        setEI((prevEI) => prevEI + 1);
        break;
      case "I":
        setEI((prevEI) => prevEI - 1);
        break;
      case "S":
        setSN((prevSN) => prevSN + 1);
        break;
      case "N":
        setSN((prevSN) => prevSN - 1);
        break;
      case "T":
        setTF((prevTF) => prevTF + 1);
        break;
      case "F":
        setTF((prevTF) => prevTF - 1);
        break;
      case "J":
        setJP((prevJP) => prevJP + 1);
        break;
      case "P":
        setJP((prevJP) => prevJP - 1);
        break;
      default:
        break;
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  useEffect(() => {
    if (currentQuestion === questionList.length) {
      let personality = "";

      if (eI > 0) personality += "E";
      else personality += "I";
      if (sN > 0) personality += "S";
      else personality += "N";
      if (tF > 0) personality += "T";
      else personality += "F";
      if (jP > 0) personality += "J";
      else personality += "P";

      setPersonalityType(personality);
    }
  }, [eI, sN, tF, jP]);

  return (
    <div className="quiz">
      <h1 className="quiz-title">MBTI Quiz</h1>
      <p className="quiz-container">
        {currentQuestion < questionList.length ? (
          <>
            <p>{questionList[currentQuestion].question}</p>
            {questionList[currentQuestion].answers.map((answer) => (
              <div key={answer.id}>
                <input
                  type="radio"
                  value={answer.id}
                  name="answer"
                  data-value={answer.value}
                />
                {answer.answer}
              </div>
            ))}

            <button className="button" onClick={handleSubmit}>
              Submit
            </button>
          </>
        ) : (
          ""
        )}
        {currentQuestion === questionList.length && questionList.length > 0 ? (
          <p>Your personality type is: {personalityType}</p>
        ) : null}
      </p>
    </div>
  );
}

export default PersonalityQuiz;
