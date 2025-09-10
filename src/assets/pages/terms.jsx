import React from "react";

const Terms = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Please read these terms carefully before using our services.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            1. Use of Website
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing our website, you agree to use it only for lawful
            purposes and in a manner that does not violate the rights of or
            restrict anyone else's use and enjoyment of the site.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            2. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content, images, logos, and text on this website are the
            exclusive property of
            <span className="text-pink-600 font-medium">
              {" "}
              YourWebsiteName
            </span>{" "}
            and are protected under copyright laws. Unauthorized use is strictly
            prohibited.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            3. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We shall not be liable for any direct, indirect, or consequential
            damages arising from your use of our website or services.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            4. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may revise these Terms and Conditions from time to time. It is
            your responsibility to check this page regularly for updates.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            5. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms, please contact us at
            <a
              href="mailto:support@example.com"
              className="text-pink-600 hover:underline ml-1"
            >
              support@example.com
            </a>
            .
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-pink-600 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Terms;
