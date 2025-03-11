import React from "react";
import aboutImg from "@/assets/about.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-36" id="about" >
      <div className="container p-5 mx-auto bg-bgColor border border-primary/10 lg:h-[400px]  flex flex-col md:flex-row items-center  md:gap-0 rounded-lg ">
        <div className="relative w-full md:w-2/5  flex justify-center items-center z-10  h-[320px] md:h-[350px] ">
          <div className="bg-[#081a24] w-[80%] h-36 z-20 rounded-md"></div>
          <Image
            // variants={fadeIn("right", "tween", 0.5, 1.1)}
            src={aboutImg}
            alt=""
            width={280}
            height={280}
            className="absolute top-5 object-cover z-50 "
          />
        </div>
        <div className="md:pl-20  md:w-3/5  flex flex-col justify-center items-center md:justify-start md:items-start ">
          <div className="pb-3 md:pb-5">
            <h2
              // variants={fadeIn("right", "tween", 0.5, 1.1)}
              className=" relative text-3xl md:text-4xl font-semibold pb-3 md:after:absolute md:after:h-[4px] md:after:top-[24px] md:after:bottom-1/2 after:left-0 md:after:transform md:after:-translate-y-1/2  md:after:bg-primary md:after:w-16 text-primary uppercase text-effect after:text-effect md:pl-16 "
            >
              About me
            </h2>
          </div>
          <p
            // variants={fadeIn("left", "tween", 0.5, 1.1)}
            className="text-sm  text-center md:text-left max-w-md  pb-5 md:pb-10  text-white tracking-widest"
          >
            I’m a Front-End React Developer who loves building smooth and
            interactive websites. I focus on clean, efficient code and great
            design. Always learning and adapting, I turn ideas into
            user-friendly experiences. Let’s create something amazing together.
          </p>
          <div
          // variants={fadeIn("up", "tween", 0.5, 1.1)}
          >
            <button className="btn flex items-center gap-2">
              Download CV{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
