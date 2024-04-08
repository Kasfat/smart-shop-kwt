import React from "react";
import "./About.css";
import AboutImg from "../../assets/images/about.jpg";
import Team1 from "../../assets/images/team-1.jpg";
import Team2 from "../../assets/images/team-2.jpg";
import Team3 from "../../assets/images/team-3.jpg";
import Banner from "../../components/Banner/Banner";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";

function About() {
  const TeamMemberInfo = [
    {
      image: Team1,
      name: "Walter White",
      post: "Web Development",
      desc: "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
    },
    {
      image: Team2,
      name: "Sarah Jhinson",
      post: "Marketing",
      desc: "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
    },
    {
      image: Team3,
      name: "William Anderson",
      post: "Content",
      desc: "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
    },
  ];

  return (
    <>
      <div className="about-section">
        <Banner
          className="about-head"
          title="About Us"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged."
        />
        <div className="aboutBody">
          <div className="aboutBody-left">
            <h1>Our Story</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,.
            </p>
          </div>
          <div className="aboutBody-right">
            <img className="about-img" src={AboutImg} />
          </div>
        </div>
        <div className="team-section">
          <div className="section-header">
            <h2> OUR TEAM</h2>
          </div>
          <TeamMemberCard TeamMemberInfo={TeamMemberInfo}/>
        </div>
      </div>
    </>
  );
}

export default About;
