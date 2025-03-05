"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useAnimate, motion } from "motion/react";

const MobileNav = () => {
  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "contact", name: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      navAnimate(navScope.current, { height: "100%", width: "70%" }, { duration: 0.7 });
    } else {
      navAnimate(navScope.current, { height: 0, width: 0 });
    }
  }, [isOpen, navAnimate, navScope]);

  const handleClickMobileNavItem = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };
  return (
    <div className="flex items-center gap-4 ">
      <button className="btn hidden md:flex">Contact me!</button>
      {/* NAV ITEMS AND ICON */}
      <div className="md:hidden">
        {/* NAV ITEM */}
        <div
          className="fixed top-24 right-0 w-full h-0 overflow-hidden bg-primary/5 backdrop-blur-3xl z-10"
          ref={navScope}
        >
          <nav className="flex flex-col">
            {navLinks.map(({ id, name }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth={true}
                spy={true}
                className="text-stone-200 py-8 border-t last:border-b border-[#0a212b] group/nav-item relative isolate cursor-pointer"
                onClick={handleClickMobileNavItem}
              >
                <div className="container  !max-w-full flex items-center justify-center">
                  <span className="text-2xl font-medium text-center group-hover/nav-item:pl-4 group-hover/nav-item:text-[#0a212b] transition-all duration-500">
                    {name}
                  </span>
                </div>
                <div className="absolute w-full h-0 bg-primary group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
              </ScrollLink>
            ))}
          </nav>
        </div>
        {/* ICON */}
        <div className="flex justify-end items-center h-20 ">
          <div className="flex items-center justify-center size-9  border border-primary rounded-full text-primary z-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={`origin-left transition ${
                  isOpen && "rotate-45 -translate-y-1"
                }`}
              ></line>
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={`transition", ${isOpen && "opacity-0"}`}
              ></line>
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={`origin-left transition ${
                  isOpen && "-rotate-45 translate-y-1"
                }`}
              ></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
