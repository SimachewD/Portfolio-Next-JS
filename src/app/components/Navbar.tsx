"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "./Footer";

// Define the Navbar component
export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>('about');

  // Function to scroll to a specific section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
      // Update the URL hash
      window.history.pushState(null, '', `#${id}`);
    }
    setActiveSection(id);
  };

  // Function to check which section is active
  const checkActiveSection = () => {
    const sections = ['about', 'experience', 'projects', 'contactme'];
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        setActiveSection(section);
        // Update the URL hash
        window.history.pushState(null, '', `#${section}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkActiveSection);
    return () => {
      window.removeEventListener('scroll', checkActiveSection);
    };
  }, []);

  useEffect(() => {
    const flashlight = document.getElementById("flashlight");

    // Track mouse movement to move the flashlight beam
    const moveFlashlight = (e: MouseEvent) => {
      if (flashlight) {
        const x = e.clientX;
        const y = e.clientY;

        // Adjusting position of flashlight
        flashlight.style.left = `${x}px`;
        flashlight.style.top = `${y}px`;
      }
    };

    // Event listener for mousemove
    document.addEventListener("mousemove", moveFlashlight);

    return () => {
      // Clean up event listener
      document.removeEventListener("mousemove", moveFlashlight);
    };
  }, []);

  return (
    <nav className="lg:col-span-2 text-center lg:h-screen lg:sticky top-0">
      {/* Flashlight beam */}
      <div
        id="flashlight"
        className="absolute mix-blend-screen pointer-events-none"
        style={{ left: 0, top: 0, transform: "translate(-50%, -50%)" }}
      >
        {/* Inner circles for sunlight effect */}
        <div
          className="w-24 h-24 bg-gradient-to-br from-blue-900 to-transparent rounded-full blur-lg"
          style={{ position: "absolute", opacity:0.4, left: 0, top: 0, transform: "translate(-50%, -50%)" }}
        ></div>
        <div
          className="w-60 h-60 bg-gradient-to-br from-blue-800 to-transparent rounded-full blur-lg"
          style={{ position: "absolute", opacity:0.3, left: 0, top: 0, transform: "translate(-50%, -50%)" }}
        ></div>
        <div
          className="w-96 h-96 bg-gradient-to-br from-blue-700 to-transparent rounded-full blur-lg"
          style={{ position: "absolute", opacity:0.2, left: 0, top: 0, transform: "translate(-50%, -50%)" }}
        ></div>
      </div>
      {/* Flashlight beam */}


      <div className="lg:flex items-center mt-12">
        <div className="w-32 h-32 mx-auto lg:mr-5 lg:w-48 lg:h-48 cursor-pointer rounded-full overflow-hidden border-8 border-black transition-transform transform-gpu hover:scale-150">
          <Image src="/assets/images/AMS_9776.JPG" alt="Profile" layout="fill" objectFit="cover" className="rounded-full" />
        </div>
        <div className="lg:mr-5">
          <h1 className="text-white text-2xl font-bold">Simachew Denekew</h1>
          <h3 className="text-white text-lg">Junior Fullstack Developer</h3>
        </div>
      </div>
      
      <p className="mx-auto w-3/4 sm:w-1/2 text-left mt-4">
        I build pixel-perfect, engaging, and accessible digital experiences.
      </p>
      
      {/* Navigation links */}
      <div className="mt-8 lg:items-center lg:space-x-4 lg:pr-4">
        <Link href="#about" className={`nav-link text-lg hidden lg:block ${activeSection === 'about' ? 'font-bold text-white underline' : ''}`} onClick={(e) => scrollToSection(e, 'about')}>About</Link>
        <Link href="#experience" className={`nav-link text-lg mt-2 hidden lg:block ${activeSection === 'experience' ? 'font-bold text-white underline' : ''}`} onClick={(e) => scrollToSection(e, 'experience')}>Experience</Link>
        <Link href="#projects" className={`nav-link text-lg mt-2 hidden lg:block ${activeSection === 'projects' ? 'font-bold text-white underline' : ''}`} onClick={(e) => scrollToSection(e, 'projects')}>Projects</Link>
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </nav>
  );
}
