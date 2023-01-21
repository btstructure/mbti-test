import React from "react";

function Personality({ questions }) {
  console.log(questions);

  const postQuestions = questions.map((questions) => {
    return (
      <p>{questions.question}</p>
    )
  });

  return (
    <div className="flex justify-center">
      {postQuestions}
    </div>
  );
}

export default Personality;
