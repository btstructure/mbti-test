import React, { useEffect, useState } from "react";

function PersonalityList() {
  const [personalityList, setPersonalityList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/personality")
      .then((res) => res.json())
      .then((data) => setQuestionList(data));
  }, []);

  const list = personalityList.map((list) => {
    return (
      <div>
        <p>{list.fourLetter}</p>
        <p>{list.description}</p>
      </div>
    );
  });
  return (
    <div>
      <p>Personality List</p>
      <p>{list}</p>
    </div>
  );
}

export default PersonalityList;
