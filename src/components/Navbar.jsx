import React from 'react'
import { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll"; 

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);


    const navLinks = [
    { to: "about", label: "About" },
    { to: "tracks", label: "Tracks" },
    { to: "timeine", label: "Timeline" },
    { to: "faqs", label: "FAQs" },
    { to: "sponsors", label: "Sponsors" },
  ];

    return (
        <div className="w-full sticky top-0 z-50 bg-gray-950/30 backdrop-blur-lg shadow-md">
      <div className="flex justify-between items-center h-16 px-6 md:px-18">
        
        <div className="logo flex items-center gap-1">
          <img className="w-10 h-10 rounded-full " src="/logo3.png" alt="logo" />
          <h1 className="text-2xl md:text-3xl text-purple-300">
            Purvanchal Technical-
            <span className="text-purple-700 font-semibold font-serif">
               Hackathon 2025
            </span>
          </h1>
        </div>

       
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}          
              smooth={true}
              duration={500}
              offset={-70}          
              spy={true}
              activeClass="text-purple-500 underline"
              className="cursor-pointer text-gray-100 hover:text-gray-100 text-lg"
            >
              {link.label}
            </ScrollLink>
          ))}

          <div className="flex items-center gap-3">
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-100"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-950/30 backdrop-blur-lg py-6 gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-purple-500 underline"
              className="cursor-pointer text-gray-100 hover:text-gray-100 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </div>
  );
};


export default Navbar