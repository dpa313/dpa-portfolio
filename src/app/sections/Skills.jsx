import React from "react";
import htmlImg from "@/assets/skills/html.png";
import csslImg from "@/assets/skills/css.png";
import tailImg from "@/assets/skills/tail.png";
import bootstrapImg from "@/assets/skills/bootstrap.png";
import jsImg from "@/assets/skills/js.png";
import reactImg from "@/assets/skills/react.png";
import nextImg from "@/assets/skills/nextAlt.svg";
import firebaseImg from "@/assets/skills/firebase.png";
import mongoImg from "@/assets/skills/mongodb.svg";
import expressImg from "@/assets/skills/ex.png";

import Image from "next/image";

const Skills = () => {
  const skillListTop = [
    {
      skill: "HTML 5",
      image: htmlImg,
    },
    {
      skill: "CSS3",
      image: csslImg,
    },
    {
      skill: "Tailwind",
      image: tailImg,
    },
    {
      skill: "Bootstrap",
      image: bootstrapImg,
    },
    {
      skill: "Javascript",
      image: jsImg,
    },
    {
      skill: "React",
      image: reactImg,
    },
    {
      skill: "Next",
      image: nextImg ,
    },
    {
      skill: "Firebase",
      image: firebaseImg,
    },
    {
      skill: "MongoDB",
      image: mongoImg,
    },
    {
      skill: "Express.js",
      image: expressImg,
    },
  ];
  return (
    <section className="py-24" id="skills">
      <div className="container mx-auto">
        <h2 className="relative tracking-wider text-center text-4xl font-semibold after-line after:w-36 uppercase text-effect">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-x-3 md:gap-x-10 mt-10 md:mt-16 lg:mt-20">
          {skillListTop.map(({ skill, image }) => (
            <a
              href="#"
              key={skill}
              className="flex flex-col border-t last:border-b [&:nth-child(9)]:border-b border-primary border-dotted py-3 relative group/project "
            >
              {/* HOVER BG TRANSITION */}
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-primary"></div>
              <div className="relative">
                <div className="flex justify-between items-center md:mt-0 pr-2">
                  <div className=" flex items-center group-hover/project:pl-2 md:group-hover/project:pl-4 lg:group-hover/project:pl-8  transition-all duration-500 ">
                    <div className="size-[40px] md:size-[50px] group-hover/project:scale-120 md:group-hover/project:scale-130  lg:group-hover/project:scale-150 transition-all duration-500 z-10 ">
                      <Image
                        src={image}
                        alt={`${skill} Image`}
                        className="size-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg md:text-2xl text-primary group-hover/project:text-[#0a212b] group-hover/project:pl-5">
                      {skill}
                    </h3>
                  </div>
                  <div className=" transition-all duration-1000 text-primary">
                    <div className="size-5 md:size-6 overflow-hidden">
                      <div className="h-5 w-9 md:h-6 md:w-12 flex group-hover/project:-translate-x-1/2  transition-transform duration-700 group-hover/project:text-[#0a212b]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
