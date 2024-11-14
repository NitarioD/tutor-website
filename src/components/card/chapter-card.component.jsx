import React from "react";

const ChapterCard = ({ imgSrc, subheading, paragraph }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="chapter 1" />
      <h3>{subheading}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default ChapterCard;
