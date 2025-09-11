import React from "react";
import { useNavigate } from "react-router-dom";

const SupportPage = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click on the 'Sign Up' button on the top-right corner and fill out the registration form. It's free and takes less than a minute.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "Go to the login page and click 'Forgot Password'. Follow the instructions to reset your password via email.",
    },
    {
      question: "How do I submit my design projects?",
      answer:
        "After logging in, go to your dashboard and click 'Upload Project'. Fill out the project details and submit your work.",
    },
    {
      question: "Can I collaborate with other designers?",
      answer:
        "Yes! Glossy encourages collaboration. You can follow other designers, comment on their projects, and join design challenges.",
    },
    {
      question: "How do I contact the support team?",
      answer:
        "Use the 'Contact Us' button below to send us a message. Our team typically responds within 24 hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Support
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Need help? Find answers to common questions or get in touch with our
            support team.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our most common questions and find quick answers.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Still Need Help?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Reach out to our support team and we’ll get back to you as soon as
            possible.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
            Join Our Creative Community
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12">
            Connect with thousands of designers, share your projects, and get
            inspired every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/about")}
              className="text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors border border-white/20 hover:border-white/40"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
