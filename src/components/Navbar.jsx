import React from 'react'
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navLinks = [
    { to: "about", label: "About" },
    { to: "tracks", label: "Tracks" },
    { to: "timeline", label: "Timeline" },
    { to: "rulebook", label: "Rulebook" },
    { to: "faqs", label: "FAQs" },
    // { to: "sponsors", label: "Sponsors" },
  ];

  return (
    <>
      <div className={`w-full md:sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'backdrop-blur-xl bg-[#060010]/60 shadow-lg'
        : 'bg-[#060010] shadow-md'
        }`}>
        <div className="flex justify-between items-center h-16 px-6 md:px-18">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-100 ml-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="logo hidden md:flex items-center gap-2">

            <img className="w-10 h-10 rounded-full" src="/log.png" alt="logo2" />
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
                activeClass="text-purple-500 "
                className="cursor-pointer text-gray-100 hover:text-gray-100 text-lg"
              >
                {link.label}
              </ScrollLink>
            ))}

            <div className="flex items-center gap-3">
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#060010] z-50 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full py-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-100 mb-8 ml-6 self-start"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col gap-6 px-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-purple-500 underline"
                className="cursor-pointer text-gray-100 hover:text-purple-300 text-lg text-left"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};


export default Navbar