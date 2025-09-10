import { useNavigate } from "react-router-dom";

const GoPro = () => {
  const navigate = useNavigate(); // Initialize navigation

  const plans = [
    {
      title: "Starter",
      price: "Free",
      description: "Perfect for beginners exploring design tools.",
      features: [
        "Access to free resources",
        "Basic analytics",
        "Community support",
        "Limited project uploads",
      ],
      buttonText: "Get Started",
      link: "/", // <-- Added link
      highlight: false,
    },
    {
      title: "Pro",
      price: "$19/month",
      description: "Best for professionals and growing teams.",
      features: [
        "Unlimited project uploads",
        "Advanced analytics",
        "Premium design resources",
        "Priority support",
        "Team collaboration tools",
      ],
      buttonText: "Upgrade to Pro",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs.",
      features: [
        "Dedicated account manager",
        "Custom integrations",
        "Enterprise-level security",
        "24/7 premium support",
      ],
      buttonText: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen">
      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg transition transform hover:-translate-y-1 p-8 text-center ${
                plan.highlight
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-lg mb-4">
                <span className="font-bold text-3xl">{plan.price}</span>
              </p>
              <p
                className={`mb-6 ${
                  plan.highlight ? "text-pink-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      plan.highlight ? "text-white" : "text-gray-700"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button with navigation */}
              <button
                onClick={() => navigate(plan.link)}
                className={`w-full py-2 rounded-full font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-pink-600 hover:bg-pink-100"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GoPro;
