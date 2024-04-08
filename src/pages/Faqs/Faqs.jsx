import React, { useState } from "react";
import "./Faqs.css";
import { faqsData } from "./FaqsData";
import Faq from "../../components/Faq/Faq";

const Faqs = () => {
  const [faqs, setFaqs] = useState(faqsData);
  return (
    <>
      <div className="faq-section">
        <div className="faqHead">
          <h1>Faqs Page </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Frequently Asked Question</h2>
        {faqs.map((faq) => (
          <Faq key={faq.id} {...faq} />
        ))}
      </div>
    </>
  );
};

export default Faqs;
