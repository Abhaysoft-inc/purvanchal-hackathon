import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div
        style={{ backgroundColor: '#060010' }}
        className="footer bottom-0 text-gray-300 px-4 sm:px-6 md:px-40 py-12 border-t border-[#2c0768]"
      >
        <div className="md:grid md:grid-cols-3 gap-10">

          {/* Left Section */}
          <div className="col-span-2 flex flex-col gap-y-4">
            <img className="w-50 rounded-xl" src="./logo3.jpg" alt="logo" />

            <p className="text-sm opacity-90 leading-relaxed">
              "Unleash your creativity, push your limits, and turn bold ideas into real innovation.
              Join brilliant minds and build solutions that shape the future."
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex gap-4 bg-white/5 border border-white/10 backdrop-blur-lg px-4 py-2 rounded-xl shadow-md">
                <a href="https://www.instagram.com/gdgoncampusknitsul" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-gray-300 text-xl hover:text-white transition-all duration-200 hover:scale-110" />
                </a>
                <a href="https://www.linkedin.com/company/gdg-on-campus-kamla-nehru-institute-of-technology" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-300 text-xl hover:text-white transition-all duration-200 hover:scale-110" />
                </a>
                <a href="https://x.com/gdgoncampusknit" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-gray-300 text-xl hover:text-white transition-all duration-200 hover:scale-110" />
                </a>
                <a href="mailto:gdgknit@knit.ac.in">
                  <FaEnvelope className="text-gray-300 text-xl hover:text-white transition-all duration-200 hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 mt-10 md:mt-0">
            <h1 className="text-xl font-semibold text-white mb-3">Get in touch</h1>
            <p className="text-sm opacity-90 flex items-center gap-2"><FaPhone className="inline text-white/80 text-base" /> Parth Sohaney - +91 7392049577</p>
            <p className="text-sm opacity-90 flex items-center gap-2"><FaPhone className="inline text-white/80 text-base" /> Ayush Jha - +91 7084683701</p>
            <p className="text-sm opacity-90 flex items-center gap-2"><FaPhone className="inline text-white/80 text-base" /> Rajat Yadav - +91 7054479519</p>
            <p className="text-sm opacity-90 flex items-center gap-2"><FaEnvelope className="inline text-white/80 text-base" /> gdgknit@knit.ac.in</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-8"></div>

        {/* Bottom Note */}
        <div className="text-center text-xs opacity-80">
          <p>© 2025 GDG KNIT Sultanpur - All Rights Reserved | Made With ❤ by GDG On Campus KNIT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
