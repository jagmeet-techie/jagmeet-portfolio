'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function PoemsPage() {
  const poems = [
    {
      title: "🌙 Midnight Whispers",
      lines: [
        "Beneath the stars I write my soul,",
        "On parchment skies that make me whole.",
        "A wand of words, a spell I weave,",
        "Of dreams I chase and hearts that grieve.",
        "Moonlight listens to every rhyme,",
        "As quills dance to the beat of time.",
        "In silent hours my truth takes flight,",
        "Cradled by shadows, kissed by night."
      ]
    },
    {
      title: "🔥 Fire of the Free",
      lines: [
        "I burn, I break, I rise again,",
        "Through phoenix flames and healing rain.",
        "With every fall, a brighter spark,",
        "My spirit glows in night so dark.",
        "Chains can't hold the soul I feed,",
        "For fire lives in every need.",
        "I dance with scars that proudly gleam,",
        "A rebel heart, an endless dream."
      ]
    },
    {
      title: "🪐 Gravity of Thought",
      lines: [
        "In orbit round my restless mind,",
        "Ideas spark, collide, unwind.",
        "A cosmic storm inside my chest,",
        "No silence ever comes to rest.",
        "I think, I float, I fear, I fall,",
        "In zero-g, I lose it all.",
        "And yet, some stars begin to shine,",
        "When thoughts align with fate’s design."
      ]
    },
    {
      title: "🦉 The Letter Never Sent",
      lines: [
        "It lay unopened, torn by time,",
        "A whisper caught in unread rhyme.",
        "What if I’d dared to write it true?",
        "Would I have found a way to you?",
        "A heart too shy, a truth too late,",
        "I gave it all to hands of fate.",
        "Now dust and ink are all that's left,",
        "Of words unsaid, of love bereft."
      ]
    },
    {
      title: "🌲 A Walk Through Me",
      lines: [
        "Each step I take in nature’s hall,",
        "Reflects the rise before a fall.",
        "The breeze it knows my silent fears,",
        "The soil has stored a thousand tears.",
        "I find myself in rustling leaves,",
        "In echoes caught between the trees.",
        "I walk to find, yet come to see—",
        "This forest trail walks back through me."
      ]
    },
    {
      title: "🕯 Candlelight Confessions",
      lines: [
        "Candlelight knows my every sin,",
        "My every truth I hold within.",
        "It flickers when I tell a lie,",
        "And weeps when I refuse to cry.",
        "Its flame is small, yet bold and true,",
        "It lights the parts I never knew.",
        "A silent friend in darkest hours,",
        "That burns away the fear it powers."
      ]
    },
    {
      title: "🌊 Tides of My Past",
      lines: [
        "The waves still bring your voice to me,",
        "Like salt and song upon the sea.",
        "You left, but oceans keep your name,",
        "In shells, in storms, in silent blame.",
        "I thought time could erase the shore,",
        "But every tide returns once more.",
        "I let it come, I let it go—",
        "Still caught between the ebb and flow."
      ]
    },
    {
      title: "🎭 Masks We Wear",
      lines: [
        "I wear a smile you’ll never doubt,",
        "But deep within, I scream it out.",
        "We all pretend with painted grace,",
        "And hide the storm behind the face.",
        "Who would we be if all was seen?",
        "Not neat, not kind, not always clean.",
        "Yet maybe in that raw expose,",
        "We’d find a self not lost, but brave."
      ]
    },
    {
      title: "📜 Pages from a Forgotten Book",
      lines: [
        "I found a book inside my chest,",
        "Its pages torn, yet still it pressed.",
        "The ink was faded, smudged with pain,",
        "But whispered truths I can’t explain.",
        "Each chapter was a life once lived,",
        "Each sentence something I once gave.",
        "The end was blank, but I could see—",
        "The pen still waits to write through me."
      ]
    },
    {
      title: "🏹 Arrows of Hope",
      lines: [
        "I shoot my hopes like arrows bright,",
        "Into the void of endless night.",
        "Some miss their mark, some fall too far,",
        "Some hit a dream, and leave a scar.",
        "Yet still I pull the string with grace,",
        "Believing one will find its place.",
        "The target shifts, but not my aim—",
        "For hope’s a game I play by name."
      ]
    }
  ];

  return (
    <div className="hogwarts-bg min-h-screen p-6 text-white">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🪄 My Poems
      </motion.h1>

      <div className="space-y-6">
        {poems.map((poem, idx) => (
          <motion.div
            key={idx}
            className="bg-black bg-opacity-40 p-4 rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{poem.title}</h2>
            <p className="leading-relaxed">
              {poem.lines.map((line, i) => (
                <span key={i}>
                  {line}<br />
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
