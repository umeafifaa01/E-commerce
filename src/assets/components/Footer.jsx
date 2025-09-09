import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-50 border-t py-8 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Dribbble</h2>
            <p class="text-sm text-gray-500 mt-2">© 2025 Dribbble</p>
            <div class="mt-2 flex gap-4 text-sm text-gray-500">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div class="space-y-2">
              <a href="#" class="block hover:text-black">
                For designers
              </a>
              <a href="#" class="block hover:text-black">
                Hire talent
              </a>
              <a href="#" class="block hover:text-black">
                Inspiration
              </a>
              <a href="#" class="block hover:text-black">
                Advertising
              </a>
            </div>
            <div class="space-y-2">
              <a href="#" class="block hover:text-black">
                Blog
              </a>
              <a href="#" class="block hover:text-black">
                About
              </a>
              <a href="#" class="block hover:text-black">
                Careers
              </a>
              <a href="#" class="block hover:text-black">
                Support
              </a>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div class="space-y-2">
              <a href="#" class="block hover:text-black">
                Branding
              </a>
              <a href="#" class="block hover:text-black">
                Product Design
              </a>
              <a href="#" class="block hover:text-black">
                Typography
              </a>
            </div>
            <div class="space-y-2">
              <a href="#" class="block hover:text-black">
                Mobile
              </a>
              <a href="#" class="block hover:text-black">
                Web Design
              </a>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto mt-8 flex justify-center space-x-6 text-gray-500">
          <a href="#" class="hover:text-black">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="hover:text-black">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="hover:text-black">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="hover:text-black">
            <i class="fab fa-pinterest"></i>
          </a>
        </div>
      </footer>

      <script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Footer;
