'use client';

import React from 'react';
import { motion } from 'framer-motion';

const poems = [
  {
    title: "1. Echoes of Solitude",
    lines: [
      "In silence I found echoes, not emptiness,",
      "Whispers of a heart that once knew rest.",
      "The stars became my diary, skies my friend,",
      "And loneliness, a poem that wouldn’t end.",
    ],
  },
  {
    title: "2. Wandering Quill",
    lines: [
      "My pen bleeds dreams I never speak,",
      "On parchment skies with ink so weak.",
      "Yet every line, a phoenix cry,",
      "That burns, then rises to the sky.",
    ],
  },
  {
    title: "3. Moonlit McLeod",
    lines: [
      "Tibetan bells in twilight’s grace,",
      "Monks in saffron, a mountain’s face.",
      "Between the clouds, I lost my name,",
      "And found my soul in whispered flame.",
    ],
  },
  // You can add 7+ more to reach 10 poems.
];

export default function PoemsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📝 My Heart's Verses
      </motion.h1>

      <div className="space-y-12 max-w-3xl mx-auto">
        {poems.map((poem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-3">{poem.title}</h2>
            <div className="space-y-2 text-lg font-light italic">
              {poem.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
