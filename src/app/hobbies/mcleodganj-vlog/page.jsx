// app/hobbies/mcleodganj-vlog/page.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const McLeodganjVlog = () => {
  return (
    <div className="hobbies-container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="magic-heading"
      >
        🎒 McLeodganj Vlog
      </motion.h1>

      <div className="section">
        <p className="section-content">
          I visited McLeodganj in [insert date], and it felt like stepping into
          a dream wrapped in mountains. Here's a glimpse:
        </p>
        <iframe
          className="vlog-video"
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="McLeodganj Vlog"
          allowFullScreen
        ></iframe>
        <p className="section-content">
          From monastery chants to Himalayan trails, this town whispers stories.
          🏞️
        </p>
        <Link href="/hobbies" className="vlog-link">
          🏰 Back to Magical Realms
        </Link>
      </div>
    </div>
  );
};

export default McLeodganjVlog;
