// src/components/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is this website about?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, exercitationem in minima quo rerum, blanditiis voluptatibus dicta, eius libero suscipit odio doloribus aliquam perferendis inventore quis temporibus molestiae consequuntur? Perspiciatis, illum a! Expedita aut corporis voluptatibus aliquid eos rem adipisci placeat nobis ex soluta, autem deserunt voluptatum nam non nostrum?",
  },
  {
    question: "How are movies rated?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, exercitationem in minima quo rerum, blanditiis voluptatibus dicta, eius libero suscipit odio doloribus aliquam perferendis inventore quis temporibus molestiae consequuntur? Perspiciatis, illum a! Expedita aut corporis voluptatibus aliquid eos rem adipisci placeat nobis ex soluta, autem deserunt voluptatum nam non nostrum?",
  },
  {
    question: "Can i submit my own reviews?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, exercitationem in minima quo rerum, blanditiis voluptatibus dicta, eius libero suscipit odio doloribus aliquam perferendis inventore quis temporibus molestiae consequuntur? Perspiciatis, illum a! Expedita aut corporis voluptatibus aliquid eos rem adipisci placeat nobis ex soluta, autem deserunt voluptatum nam non nostrum?",
  },
  {
    question: "Is the content of the website free?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, exercitationem in minima quo rerum, blanditiis voluptatibus dicta, eius libero suscipit odio doloribus aliquam perferendis inventore quis temporibus molestiae consequuntur? Perspiciatis, illum a! Expedita aut corporis voluptatibus aliquid eos rem adipisci placeat nobis ex soluta, autem deserunt voluptatum nam non nostrum?",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
