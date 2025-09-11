import React from "react";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cookies Policy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            This page explains how Glossy uses cookies and similar technologies
            on our platform.
          </p>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What Are Cookies?
          </h2>
          <p className="text-gray-600 mb-4">
            Cookies are small text files stored on your device when you visit a
            website. They help enhance your experience, remember preferences,
            and provide analytics.
          </p>
        </div>
      </section>

      {/* How We Use Cookies Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How We Use Cookies
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>To remember your preferences and settings.</li>
            <li>To improve website functionality and performance.</li>
            <li>To analyze traffic and user behavior on our platform.</li>
            <li>To deliver personalized content and recommendations.</li>
          </ul>
        </div>
      </section>

      {/* Managing Cookies Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Managing Cookies
          </h2>
          <p className="text-gray-600 mb-4">
            You can manage or disable cookies through your browser settings.
            Note that some features of Glossy may not work properly if cookies
            are disabled.
          </p>
          <p className="text-gray-600 mb-4">
            For more information, you can visit your browser’s help section to
            learn how to manage cookies on your device.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            If you have questions about our cookies policy, please contact us at{" "}
            <a
              href="mailto:support@glossy.com"
              className="text-pink-500 underline"
            >
              support@glossy.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
