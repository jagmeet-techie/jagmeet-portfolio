&apos;use client&apos;;

import React from &apos;react&apos;;
import Link from &apos;next/link&apos;;
import { motion } from &apos;framer-motion&apos;;


const HobbiesPage = () => {
  return (
    <div className="hobbies-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hobbies-title"
      >
        🧙‍♂️ Welcome to My Magical World
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hobbies-subtitle"
      >
        A collection of my creative spells — poetry and enchanted travels ✨
      </motion.p>

      <div className="card-wrapper">
        <motion.div
          className="hobby-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2>📝 Poems</h2>
          <p>Read the verses straight from my soul.</p>
          <Link href="/poems" className="card-link">Explore Poems</Link>
        </motion.div>

        <motion.div
          className="hobby-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2>🧳 Travel Diary</h2>
          <p>Join me in my journey to magical places.</p>
          <Link href="/travel" className="card-link">Visit McLeodganj</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HobbiesPage;
