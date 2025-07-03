"use client";

import React from "react";
import ItemLayout from "./ItemLayout";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-left w-full capitalize font-bold hover:text-yellow-300 transition-colors duration-300"
          >
            Architect of Enchantment
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-light text-xs sm:text-sm md:text-base mt-4 leading-relaxed"
          >
            Hi, I&apos;m <strong className="text-yellow-300">Jagmeet Singh</strong> — a passionate developer, creative thinker, and lifelong learner. I specialize in building user-centric digital experiences that blend functionality with stunning design. Whether it&apos;s a portfolio, product interface, or a full-scale web app, I enjoy crafting projects that solve real-world problems.
            <br />
            <br />
            Currently, I&apos;m focused on expanding my skills in <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern web development while also exploring the potential of <strong>AI tools</strong> and <strong>IoT innovations</strong>. I believe in building with purpose, learning continuously, and giving back through community-driven projects.
            <br />
            <br />
            When I&apos;m not coding, you&apos;ll find me sketching ideas, exploring tech trends, or dreaming up my next big project.
            <br />
            <br />
            Let&apos;s connect and create something awesome!
          </motion.p>
        </ItemLayout>

        {["Data Analyst", "Software Developer", "Web Developer"].map((title, idx) => (
          <ItemLayout
            key={idx}
            className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
          >
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-semibold w-full text-left text-2xl sm:text-5xl hover:scale-105 transition-transform duration-300"
            >
              {title}
            </motion.p>
          </ItemLayout>
        ))}

        <ItemLayout className="col-span-full">
          <motion.img
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-auto rounded-xl shadow-xl"
            src="https://skillicons.dev/icons?i=html,css,js,c,cpp,java,python,react,nodejs,threejs,figma,sql"
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
