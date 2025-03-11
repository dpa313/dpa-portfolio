import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <motion.section
      // variants={staggerContainer(0.3, 1)}
      // initial="hidden"
      // whileInView={"show"}
      id="projects"
      className="relative flex justify-center items-center"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="sticky top-6 left-0 pt-20 text-center">
          <motion.h2
            // variants={fadeIn("down", "tween", 0.5, 1.5)}
            className="tracking-wider text-center text-3xl md:text-4xl font-semibold pb-3 text-effect uppercase"
          >
            Featured Works
          </motion.h2>
          <motion.div
            style={{ scaleX }}
            className="h-[5px] bg-primary rounded-full"
          ></motion.div>
        </div>
        <ProjectCard />
      </div>
    </motion.section>
  );
};

export default Projects;
