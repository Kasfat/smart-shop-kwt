import React from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ data }) => {
  return (
    <div className="member">
      <img src={data.image} />
      <div className="member-content">
        <h4>{data.name}</h4>
        <span>{data.post}</span>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
