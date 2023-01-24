import React from "react";

function Personality({ questionList }) {

  console.log(questionList);
  const postQuestion = questionList.map((question) => {
    return (
      <div>
        <p>{question.question}</p>
        {question.answers.map((answer) => {return(<p>{answer.answer}</p>)})}
      </div>
    );
  });

  return <div className="flex justify-center">{postQuestion}</div>;
}

export default Personality;
