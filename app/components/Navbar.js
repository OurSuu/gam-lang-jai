"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#8B1A2B] shadow-lg"
        : "bg-[#8B1A2B] shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[90px] relative">
        {/* White Logo Box */}
        <div className="absolute left-4 lg:left-6 top-0 w-[90px] lg:w-[180px] h-[60px] lg:h-[95px] bg-white rounded-b-2xl lg:rounded-b-3xl flex items-center justify-center shadow-md overflow-hidden">
          <a href="#home" className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Kamlangjai Logo"
              fill
              className="object-contain hover:scale-110 transition-transform duration-300 scale-[1.15]"
              priority
            />
          </a>
        </div>

        {/* Spacer for Logo Box */}
        <div className="w-[100px] lg:w-[190px]"></div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === link.href.slice(1)
                  ? "text-white bg-white/20"
                  : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[90px] left-0 w-full bg-white shadow-lg transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <ul className="flex flex-col p-4 gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === link.href.slice(1)
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
