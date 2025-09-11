import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This page explains how Glossy
            collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Information Collection Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly, such as your name,
            email, and account details when you register or submit content.
          </p>
          <p className="text-gray-600 mb-4">
            We also collect usage data, like your activity on the platform,
            browser type, and IP address to improve your experience.
          </p>
        </div>
      </section>

      {/* How We Use Information Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How We Use Information
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>To provide and maintain our services.</li>
            <li>To personalize your experience and recommend designs.</li>
            <li>To communicate important updates and promotional content.</li>
            <li>To detect and prevent fraud or unauthorized activity.</li>
          </ul>
        </div>
      </section>

      {/* Information Sharing Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Information Sharing
          </h2>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information. We may share your data
            with trusted service providers or as required by law.
          </p>
          <p className="text-gray-600 mb-4">
            We may also share aggregated, non-identifiable information to help
            improve our platform and services.
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Security
          </h2>
          <p className="text-gray-600 mb-4">
            We implement industry-standard measures to protect your information
            from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy or our
            practices, please contact us at{" "}
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

export default Privacy;
