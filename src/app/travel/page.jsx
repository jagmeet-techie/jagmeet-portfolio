'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function TravelPage() {
  return (
    <div className="hogwarts-bg min-h-screen p-6 text-white">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ✈️ McLeodganj Travel Diary
      </motion.h1>

      <motion.p
        className="mb-6 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        I visited the peaceful heights of McLeodganj and found magic beyond spells.
        Foggy hills, Tibetan chants, and the sound of silence — it all felt like a hidden part of Hogwarts.
        Here&apos;s my photo story, with a sprinkle of soul 🧘‍♂️.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img src="/mcleod1.jpg" alt="Snowy mountain in McLeodganj" className="rounded-lg shadow-md" />
        <img src="/mcleod2.jpg" alt="Cozy café in the hills" className="rounded-lg shadow-md" />
        <img src="/mcleod3.jpg" alt="Golden sunset from the valley" className="rounded-lg shadow-md" />
      </motion.div>

      <motion.div 
        className="mt-10 text-lg italic text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        “Not all those who wander are lost.” – J.R.R. Tolkien
      </motion.div>
    </div>
  );
}
