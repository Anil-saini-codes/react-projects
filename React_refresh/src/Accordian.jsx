import { useState } from "react";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library.",
    },
    {
      question: "What is Zustand?",
      answer: "Zustand is state management library.",
    },
    {
      question: "What is Redux Toolkit?",
      answer: "Redux Toolkit simplifies Redux.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ width: "500px", margin: "50px auto" }}>
      <h2>Accordion Example</h2>

      {faqs.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          {/* Question */}
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              padding: "15px",
              cursor: "pointer",
              background: "#f5f5f5",
              fontWeight: "bold",
            }}
          >
            {item.question}
          </div>

          {/* Answer */}
          {openIndex === index && (
            <div style={{ padding: "15px", background: "#f0f0f0" }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
