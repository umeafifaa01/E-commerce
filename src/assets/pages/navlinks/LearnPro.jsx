import React from "react";

const LearnPro = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Unlock the Power of Pro 🚀
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-100">
          Get advanced tools, priority support, and premium features to take
          your design journey to the next level.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Upgrade to Pro?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Unlimited Projects",
              desc: "Create and manage unlimited projects with no restrictions.",
              icon: "🗂️",
            },
            {
              title: "Premium Templates",
              desc: "Access exclusive design templates to speed up your workflow.",
              icon: "🎨",
            },
            {
              title: "Priority Support",
              desc: "Get top-notch priority support from our expert team.",
              icon: "⚡",
            },
            {
              title: "Advanced Analytics",
              desc: "Track your performance with detailed analytics and insights.",
              icon: "📊",
            },
            {
              title: "Collaboration Tools",
              desc: "Work seamlessly with your team in real-time.",
              icon: "🤝",
            },
            {
              title: "Exclusive Community",
              desc: "Join a private network of top designers and professionals.",
              icon: "🌍",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Upgrade?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Start your Pro journey today and elevate your creative potential.
        </p>
        <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-transform hover:scale-105 shadow-lg hover:shadow-xl">
          Upgrade to Pro
        </button>
      </section>
    </div>
  );
};

export default LearnPro;
