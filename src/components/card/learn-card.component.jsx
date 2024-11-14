import React from "react";

const LearnCard = ({ imgSrc, text }) => {
  return (
    <div className="topic">
      <div className="topic-image">
        <img src={imgSrc} alt="topic" />
      </div>
      <div className="topic-text">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default LearnCard;
