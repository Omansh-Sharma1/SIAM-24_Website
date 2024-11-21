import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-8">
        {/* Logo and About */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-700 pb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="Logo.png"
              alt="Logo"
              className="h-16"
            />
          </div>
          <div className="font-playfair text-center md:text-right text-sm text-gray-400">
            <p>
              © 2023 <Link to="/" className="hover:underline">SIAM-JUIT</Link> - All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
          {/* Resources */}
          <div>
            <h3 className="text-2xl font-['Exo_2'] font-semibold text-white mb-4">Resources</h3>
            <ul className="font-roboto text-medium font-semibold space-y-4 text-gray-300">
              <li>
                <Link to="/" className="hover:text-green-400 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400 transition duration-300">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-['Exo_2'] font-semibold text-white mb-4">Follow Us</h3>
            <ul className="font-roboto text-medium font-semibold space-y-4 text-gray-300">
              <li>
                <a
                  href="https://www.linkedin.com/company/siamjuit"
                  className="hover:text-green-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                {/* <Link to="https://www.instagram.com/siamjuit/" className="hover:text-yellow-400 transition duration-300" >Instagram</Link> */}
                <a
                  href="https://www.instagram.com/siamjuit/"
                  className="hover:text-green-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
              <a
                  href="https://x.com/siamjuit"
                  className="hover:text-green-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-2xl font-['Exo_2'] font-semibold text-white mb-4">Links</h3>
            <ul className="font-roboto text-medium font-semibold space-y-4 text-gray-300">
              <li>
              <a
                  href="https://www.siam.org/"
                  className="hover:text-green-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Siam Global
                </a>
              </li>
              {/* <li>
                <Link to="#" className="hover:text-yellow-400 transition duration-300">Terms & Conditions</Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://www.linkedin.com/company/siamjuit"
            className="text-white-400 hover:text-blue-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-9 h-9" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 19">
              <path
                fillRule="evenodd"
                d="M22.2283 0.133301H1.77167C1.30179 0.133301 0.851161 0.319958 0.518909 0.65221C0.186657 0.984462 0 1.43509 0 1.90497V22.3616C0 22.8315 0.186657 23.2821 0.518909 23.6144C0.851161 23.9466 1.30179 24.1333 1.77167 24.1333H22.2283C22.6982 24.1333 23.1488 23.9466 23.4811 23.6144C23.8133 23.2821 24 22.8315 24 22.3616V1.90497C24 1.43509 23.8133 0.984462 23.4811 0.65221C23.1488 0.319958 22.6982 0.133301 22.2283 0.133301ZM7.15333 20.5783H3.545V9.11663H7.15333V20.5783ZM5.34667 7.5283C4.93736 7.526 4.53792 7.4025 4.19873 7.17339C3.85955 6.94428 3.59584 6.61983 3.44088 6.24099C3.28591 5.86215 3.24665 5.44589 3.32803 5.04476C3.40941 4.64362 3.6078 4.27558 3.89816 3.98708C4.18851 3.69859 4.55782 3.50257 4.95947 3.42376C5.36112 3.34495 5.77711 3.38689 6.15495 3.54429C6.53279 3.70168 6.85554 3.96747 7.08247 4.30811C7.30939 4.64876 7.43032 5.04899 7.43 5.4583C7.43386 5.73233 7.38251 6.00434 7.27901 6.25811C7.17551 6.51187 7.02198 6.7422 6.82757 6.93537C6.63316 7.12853 6.40185 7.28058 6.14742 7.38245C5.893 7.48432 5.62067 7.53392 5.34667 7.5283ZM20.4533 20.5883H16.8467V14.3266C16.8467 12.48 16.0617 11.91 15.0483 11.91C13.9783 11.91 12.9283 12.7166 12.9283 14.3733V20.5883H9.32V9.12497H12.79V10.7133H12.8367C13.185 10.0083 14.405 8.8033 16.2667 8.8033C18.28 8.8033 20.455 9.9983 20.455 13.4983L20.4533 20.5883Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/siamjuit/"
            className="text-white-400 hover:text-pink-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <svg className="w-9 h-9" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
              <path
                fillRule = "evenodd"
                d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" 
              />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="text-white-400 hover:text-gray-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-8 h-9" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M18.3263 2.03711H21.6998L14.3297 10.4606L23 21.9231H16.2112L10.894 14.9711L4.80995 21.9231H1.43443L9.31743 12.9132L1 2.03711H7.96111L12.7674 8.39144L18.3263 2.03711ZM17.1423 19.9039H19.0116L6.94539 3.95024H4.93946L17.1423 19.9039Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
