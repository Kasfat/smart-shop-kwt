import React from "react";

const TeamMemberCard = ({ TeamMemberInfo }) => {
  console.log(TeamMemberInfo);
  return (
    <div className="team">
      {TeamMemberInfo.map((value, index) => (
        <div className="member" key={index}>
          <img src={value.image} />
          <div className="member-content">
            <h4>{value.name}</h4>
            <span>{value.post}</span>
            <p>{value.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberCard;
