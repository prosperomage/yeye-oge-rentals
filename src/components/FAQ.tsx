import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What is the minimum rental period?",
    answer: "Most items are rented on a daily basis."
  },
  {
    question: "Do you deliver and pick up?",
    answer: "Yes. We offer delivery and pickup across Lagos."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 1–2 weeks before your event."
  },
  {
    question: "Can I inspect items before booking?",
    answer: "Absolutely. Contact us to schedule a visit."
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-cream py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-heading text-4xl text-burgundy text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-dark">
                  {faq.question}
                </span>

                <HiChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-mid">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;