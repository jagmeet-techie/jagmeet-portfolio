"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-6xl py-6 px-6 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center"
    >
      {projects.map((project, index) => (
        <ProjectLayout key={index} {...project} />
      ))}
    </motion.div>
  );
};

export default ProjectList;
