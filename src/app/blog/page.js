"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const blogFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const aboutText = `When I'm not immersed in code, I'm wandering through books, paths, and ideas. I love traveling to unfamiliar places — both on maps and in my mind. Teaching fills my heart, learning keeps it alive, and curiosity is my compass. I'm drawn to stories, to creativity, and to the joy of discovering something new, every single day.I love watching, Harry potter movies they are my happy place, I know basic french too, Bonjour Comment Ca Va?(Hehe),I love writing poems in my leasure time.Thank you for your time  `;

export default function BlogPage() {
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < aboutText.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + aboutText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [charIndex]);

  return (
    <section
      className="min-h-screen bg-cover bg-center flex justify-center items-center py-16 px-4"
      style={{
        backgroundImage: "url('/old-paper-texture.jpg')",
      }}
    >
      <motion.div
        variants={blogFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl bg-[#f7f1dc]/90 shadow-2xl backdrop-blur-sm p-10 rounded-xl border border-[#e0d6bd]"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          position: "relative",
        }}
      >
        <h1 className="text-4xl font-bold mb-6 text-[#4e3825] underline underline-offset-4">
          Who I Am
        </h1>

        <p className="mb-4 text-lg leading-relaxed text-[#4e3825]">
          Dear Reader,
        </p>

        <p className="mb-4 text-lg leading-relaxed text-[#4e3825] italic">
          {typedText}
          <span className="animate-pulse text-[#4e3825]">|</span>
        </p>

        <p className="text-lg leading-relaxed text-[#4e3825] mt-6 italic">
          Yours creatively,
          <br />
          Jagmeet
        </p>
      </motion.div>
    </section>
  );
}
