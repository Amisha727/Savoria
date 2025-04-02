import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We are open Monday to Friday from 11:00 AM to 10:00 PM, and on weekends from 10:00 AM to 11:00 PM."
    },
    {
      question: "Do you take reservations?",
      answer: "Yes, we accept reservations through our website's booking system or by phone. We recommend booking in advance, especially for weekends and special occasions."
    },
    {
      question: "Is there a dress code?",
      answer: "We maintain a smart casual dress code. While we want our guests to be comfortable, we ask that they avoid wearing beachwear or sportswear."
    },
    {
      question: "Do you cater for special dietary requirements?",
      answer: "Yes, we offer various options for vegetarian, vegan, and gluten-free diets. Please inform us of any dietary requirements when making your reservation."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have a dedicated parking area for our guests. Valet parking is also available during dinner hours."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we offer delivery within a 5km radius. You can place your order through our website or food delivery partners."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about Savoria</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}