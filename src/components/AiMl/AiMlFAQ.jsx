import React, { useState } from 'react'
import Aiml1 from '../images/Aiml1.png'
import Aiml2 from '../images/AiMl2.png'
import Aiml3 from '../images/AiMl3.png'
import Footer from '../Footer'

const AiMlFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-5 md:px-4  lg:px-28 font-inter">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="divide-y divide-gray-200">
        {[
          {
            question: "What are the prerequisites for this workshop?",
            answer:
              "Before starting the AI/ML workshop, having a foundational understanding of programming, particularly in Python, is crucial. Basic knowledge of mathematics, including linear algebra, calculus, and statistics, will be beneficial for grasping core concepts in machine learning and AI.",
          },
          {
            question: "Is this workshop suitable for beginners?",
            answer:
              "Yes, the AI/ML workshop is suitable for beginners with a basic understanding of programming and math. The course starts with foundational concepts, making it accessible for newcomers while also offering depth for those looking to advance their skills.",
          },
          {
            question: "Will I get a certificate after completing the workshop?",
            answer:
              "Yes, you will receive a certification upon successful completion of the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.",
          },

          {
            question: "Can I cancel my enrollment and get a refund?",
            answer:
              'Yes, you can cancel your enrollment. For checking the refund policy, please <a href="https://example.com/refund-policy" className="text-blue-500  underline hover:text-blue-700">click here</a>.',
          },
        ].map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center text-lg font-medium text-gray-700 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openIndex === index && (
              <div
                className="mt-2 text-blue-600 font-normal"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto   ">
      <h2 className="text-2xl font-bold mb-8 mt-8">Upcoming Workshops</h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
      
        <div className="flex-1 mb-6 md:mb-0">
          <img src={Aiml1} alt="Employee Relations workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          Deep Learning Workshop
          </div>
        </div>

      
        <div className="flex-1 mb-6 md:mb-0 px-0">
          <img src={Aiml2} alt="Talent Management workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          Model Optimization Workshop
          </div>
        </div>

   
        <div className="flex-1 mb-6 md:mb-0">
          <img src={Aiml3} alt="Diversity and Inclusion workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          Industry Applications Workshop 
          </div>
        </div>
      </div>
    </div>
    
    <br/>
    <br/>
<Footer/>
    
    </div>
  );
}

export default AiMlFAQ