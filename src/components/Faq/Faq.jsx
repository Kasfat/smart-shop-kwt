import React, { useState } from "react";
import DownArrow from "../../assets/images/down_arrow.svg";
import "./Faq.css";

const Faq = ({ id, question, answer }) => {
  const [activeIndex, setActiveIndex] = useState(false);

  const toggleActiveIndex = (id) => {
    console.log(id);
    setActiveIndex(id === activeIndex ? false : id);
  };

  return (
    <>
      <article>
        <div className="faq">
          <div className="question" onClick={() => toggleActiveIndex(id)}>
            <h3>{question}</h3>
            <img src={DownArrow} className={activeIndex === id ? "rotate" : ""}/>
          </div>
          {activeIndex === id &&  (
            <div className="answer">
              <p>{answer}</p>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default Faq;
