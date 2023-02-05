import React from "react";

function PersonalityQuiz({ questionList }) {
  console.log(questionList);
  const postQuestion = questionList.map((question) => {
    return (
      <div>
        <ol>
          <li>{question.question}</li>
        </ol>
        {question.answers.map((answer) => {
          return (
            <div>
              <input type="radio" name="choice" />
              {answer.answer}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div>
      <h1>MBTI Quiz</h1>
      <p>{postQuestion}</p>
    </div>
  );
}

export default PersonalityQuiz;
