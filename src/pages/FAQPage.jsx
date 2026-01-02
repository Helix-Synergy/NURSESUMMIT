import React, { useState } from "react";

const faqLinks = {
  tracks: "/nursesummit-conference-tracks/" ,
  abstractSubmission: "/abstract-submission",
  schedule:"/nursesummit-event-schedule",
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is NURSESUMMIT-2026?",
    answer:
      "NURSESUMMIT-2026, officially titled the “Nursing & Nurse Practices Conclave”, is a premier international healthcare conference organized by Helix Conferences. The conclave brings together nurses, clinicians, educators, healthcare leaders, researchers, and policymakers to advance nursing practices, clinical excellence, innovation, and patient-centered care.",
  },
  {
    question: "When and where will NURSESUMMIT-2026 take place?",
    answer:
      "NURSESUMMIT-2026 will be held on November 19–20, 2026, in Dubai, UAE.",
  },
  {
    question: "What are the key highlights of NURSESUMMIT-2026?",
    answer:
      "Global keynote sessions, advanced clinical nursing workshops, evidence-based practice discussions, nursing research presentations, leadership forums, panel discussions, innovation showcases, and international networking opportunities.",
  },
  {
    question: "What topics and tracks are covered at NURSESUMMIT-2026?",
    answer: (
      <>
        Explore the complete list of conference tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          NURSESUMMIT-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I present my research or explore sponsorship opportunities?",
    answer: (
      <>
        To present your research, clinical case studies, or discuss sponsorship
        opportunities, please contact us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract or proposal?",
    answer: (
      <>
        Abstract and presentation submissions can be made{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the registered email address after successful registration.",
  },
  {
    question: "What materials will participants receive?",
    answer:
      "Registered participants will receive a digital conclave kit including the agenda, speaker details, session information, and exhibitor profiles.",
  },
  {
    question: "What is the duration of presentation slots?",
    answer:
      "Standard presentation slots are typically 15–20 minutes, including Q&A. Final guidelines will be shared upon abstract acceptance.",
  },
  {
    question: "Who should attend NURSESUMMIT-2026?",
    answer:
      "Registered nurses, nurse practitioners, clinical educators, nursing researchers, healthcare professionals, hospital administrators, policy makers, and students involved in nursing practice and education.",
  },
  {
    question: "How many participants are expected?",
    answer:
      "NURSESUMMIT-2026 is expected to host 150+ international participants, including speakers, delegates, exhibitors, and sponsors.",
  },
  {
    question: "Can I submit multiple abstracts?",
    answer:
      "Yes, multiple abstract submissions are allowed as long as each submission covers a unique topic or study.",
  },
  {
    question: "Are keynote and featured speaker slots available?",
    answer:
      "Yes, a limited number of keynote and featured speaker slots are available and subject to review and approval.",
  },
  {
    question: "What is expected from speakers and exhibitors?",
    answer:
      "Speakers and exhibitors are expected to deliver evidence-based, practice-oriented sessions and actively engage with delegates.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, registration fees apply for attendees, speakers, and exhibitors. Full pricing details are available under the “Buy A Ticket” section.",
  },
  {
    question: "How can I view the conclave schedule?",
    answer: (
      <>
        The detailed schedule will be released soon. You can view it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I view the agenda and speaker list before the event?",
    answer:
      "Yes, the complete agenda, confirmed speakers, and exhibitor list will be announced prior to the event.",
  },
  {
    question: "Is early registration available?",
    answer:
      "Yes, early registration is available and recommended due to limited delegate slots.",
  },
  {
    question: "How can I get assistance with travel or accommodation?",
    answer: (
      <>
        For travel and accommodation assistance, please contact{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];






const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
