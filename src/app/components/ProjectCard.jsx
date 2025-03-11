import React from "react";
import portImg1 from "@/assets/projects/port1.png";
import portImg2 from "@/assets/projects/port2.png";
import portImg3 from "@/assets/projects/port3.png";
// import portImg4 from '@/assets/projects/port4.png'
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = () => {
  const projects = [
    {
      num: "01",
      category: "fullstack",
      title: "Food Delivery App",
      description:
        "It is a dynamic food website built with React.js, featuring a MongoDB and Express backend for efficient CRUD operations.",
      stack: [
        { name: "Html 5" },
        { name: "Tailwind" },
        { name: "React.Js" },
        { name: "MongoDB" },
        { name: "Express.Js" },
      ],
      image: portImg1,
      live: "",
      github: "",
    },
    {
      num: "02",
      category: "fullstack",
      title: "Dynamic Form Builder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate similique distinctio recusandae sit corrupti vero illo consequatur ",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
      image: portImg2,
      live: "",
      github: "",
    },
    {
      num: "03",
      category: "",
      title: "Pure React App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate similique distinctio recusandae sit corrupti vero illo consequatur ",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
      image: portImg3,
      live: "",
      github: "",
    },
  ];
  return (
    <div className="">
      {projects.map((project, index) => {
        return (
          <motion.div
            // keyindex
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`flex flex-col-reverse md:flex-row items-center justify-between text-sm bg-[#0a212b]  border border-primary/10 mt-20 gap-10 rounded-xl p-7 md:p-16 sticky top-48 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row mt-10 "
            }`}
            key={project.num}
          >
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-y-3">
              {/* Outline number */}
              <div className="flex items-center gap-1 text-[24px] lg:text-4xl leading-none font-extrabold text-transparent text-outline">
                <span>{project.num}.</span>
                <h2 className="font-medium tracking-wide leading-none text-white group-hover:text-primary transition-all duration-500 whitespace-nowrap uppercase">
                  {project.title}
                </h2>
              </div>
              {/* project Description */}
              <p className="text-white/60 text-sm lg:text-base">
                {project.description}
              </p>
              {/* Stack */}
              <ul className="flex flex-wrap justify-center md:justify-start  gap-x-2 uppercase text-primary text-effect text-sm font-bold">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="space-x-3">
                <button className="btn-outline">Live View</button>
                <button className="btn-outline">View Code</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex justify-center ">
                <Image
                  src={project.image}
                  alt=""
                  width={300}
                  height={120}
                  className="object-cover "
                />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
