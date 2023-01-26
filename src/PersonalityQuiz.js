import React from "react";

function PersonalityQuiz({ questionList }) {
  console.log(questionList);
  const postQuestion = questionList.map((question) => {
    return (
      <div className="flex justify-center">
        <ol>
          <li>{question.question}</li>
        </ol>
        {question.answers.map((answer) => {
          return (
            <p>
              <input type="radio" name="choice" />
              {answer.answer}
            </p>
          );
        })}
      </div>
    );
  });

  return (
    <div className="flex justify-center">
      <h1 className="text-3xl p-10">MBTI TEST</h1>
      <p>{postQuestion}</p>
    </div>
  );
}

export default PersonalityQuiz;
