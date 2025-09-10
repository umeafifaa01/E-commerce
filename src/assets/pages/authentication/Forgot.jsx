import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setMessage("");

    // Simulated API call
    setTimeout(() => {
      setIsLoading(false);
      setMessage(
        "If this email is registered, a password reset link has been sent."
      );
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors"
          >
            Glossy
          </button>
          <div className="text-sm text-gray-600">
            Remember your password?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Heading */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                Forgot Password
              </h1>
              <p className="text-gray-600 mt-2 text-sm">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${
                    errors.email
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-300 focus:ring-pink-500"
                  }`}
                  placeholder="Enter your registered email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
                  isLoading
                    ? "bg-pink-400 cursor-not-allowed"
                    : "bg-pink-600 hover:bg-pink-700 hover:shadow-lg transform hover:scale-105"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>

            {/* Success Message */}
            {message && (
              <p className="mt-4 text-green-600 text-sm text-center font-medium">
                {message}
              </p>
            )}

            {/* Back to login */}
            <div className="text-center mt-6">
              <button
                onClick={() => navigate("/login")}
                className="text-sm text-pink-600 hover:underline"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
