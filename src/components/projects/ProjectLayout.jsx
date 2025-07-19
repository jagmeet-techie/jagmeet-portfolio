"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink, techStack }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-[300px] aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg hover:shadow-[0_0_30px_#a855f7] hover:scale-105 transition duration-300 ease-in-out p-6 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>
        <p className="text-sm text-zinc-300 line-clamp-3">{description}</p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-violet-700/20 text-violet-400 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-right text-xs text-zinc-500 mt-4">
          {new Date(date).toDateString()}
        </p>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
