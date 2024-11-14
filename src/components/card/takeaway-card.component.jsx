import React from "react";

const TakeawayCard = ({ iconClasses, boldText, otherText }) => {
  return (
    <div className="card">
      <i className={iconClasses}></i>
      <p>
        <strong>{boldText}</strong> {otherText}
      </p>
    </div>
  );
};

export default TakeawayCard;
