import React, { useEffect, useState } from "react";
import PersonalityListCard from "./PersonalityListCard";

function PersonalityList() {
  const [personalityList, setPersonalityList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/personality")
      .then((res) => res.json())
      .then((data) => setPersonalityList(data));
  }, []);

  function Search(query, personalityList) {
    if (!query) return personalityList;
    const lowerCaseQuery = query.toLowerCase();
    return personalityList.filter((list) => {
      const lowerCaseFourLetter = list.fourLetter.toLowerCase();
      return lowerCaseFourLetter.includes(lowerCaseQuery);
    });
  }

  const filteredList = Search(query, personalityList);

  const list = filteredList.map((list) => {
    return (
      <div>
        <p>{list.fourLetter}</p>
      </div>
    );
  });

  return (
    <div class="personality-list">
      <div className="personality-list-title">
        <p>Personality List</p>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search ..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <p class="personality-container" onClick={console.log("clicked")}>
        {list}
      </p>
      <PersonalityListCard personalityList={personalityList} />
    </div>
  );
}

export default PersonalityList;
