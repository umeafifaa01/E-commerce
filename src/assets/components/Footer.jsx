import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              For designers
            </h3>
            <div className="space-y-3">
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Go Pro!
              </button>
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Explore design work
              </button>
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Design blog
              </button>
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Overtime podcast
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Hire designers
            </h3>
            <div className="space-y-3">
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Post a job opening
              </button>
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Post a freelance project
              </button>
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Search for designers
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
            <div className="space-y-3">
              <button
                onClick={() => navigate("/abt")}
                className="block text-gray-600 hover:text-pink-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => navigate("/find")}
                className="block text-gray-600 hover:text-pink-600 transition-colors text-left"
              >
                Careers
              </button>
              <button
                onClick={() => navigate("/support")}
                className="block text-gray-600 hover:text-pink-600 transition-colors text-left"
              >
                Support
              </button>
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Media kit
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Directories
            </h3>
            <div className="space-y-3">
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Design jobs
              </button>
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Designers for hire
              </button>
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Freelance designers
              </button>
              <button className="block text-gray-600 hover:text-pink-600 transition-colors text-left">
                Tags
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 Glossy. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate("/terms")}
              className="text-gray-500 hover:text-pink-600 transition-colors text-sm"
            >
              Terms
            </button>
            <button
              onClick={() => navigate("/privacy")}
              className="text-gray-500 hover:text-pink-600 transition-colors text-sm"
            >
              Privacy
            </button>
            <button
              onClick={() => navigate("/cookies")}
              className="text-gray-500 hover:text-pink-600 transition-colors text-sm"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
