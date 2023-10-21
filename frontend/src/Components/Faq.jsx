import React, { useState } from 'react';
import './Faq.css'; // Import a CSS file for styling

function Faq() {
  const [faqData, setFaqData] = useState([
    {
      question: `Q: How can I get involved in women's empowerment initiatives or support women's causes?`,
      answer:`Ans: We list opportunities to volunteer, donate, and engage in women's empowerment organizations and movements.`
    },
    {
      question: `Q: How can I manage period pain and discomfort?`,
      answer:`Ans: Explore our articles ( Remidees feature) on menstrual health, which include advice on pain relief, tracking your cycle, and maintaining overall well-being during your period.`
    },
    {
      question: `Q: What's the best way to educate young girls about menstruation?`,
      answer:`Ans:  Check our resources for parents and caregivers, which offer guidance on how to have age-appropriate conversations with young girls about menstruation and their changing bodies.`
    },
    {
      question: `Q: How can I advance my career as a woman?`,
      answer:`Ans:  Our website offers valuable resources and articles on career development, including tips on networking, negotiating salaries, and finding work-life balance.`
    },
    
  ]);

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="faq-container">
      <h2 style={{fontSize:"26px", color:"cyan" ,marginBottom:"2vh"}}>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((faq, index) => (
          <li key={index}>
            <div style={{fontSize:"20px"}}
              className={`faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            {openIndex === index && (
              <div className="faq-answer" style={{fontSize:"20px"}}>{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
