'use client';
import React, { useEffect, useRef, useState } from 'react';

// Define the keyframe animation directly in JavaScript for easier management
const sparkleAnimationCss = `
  @keyframes sparkle-fade {
    0% {
      opacity: 1;
      transform: scale(1) translate(0, 0);
      filter: blur(0px);
    }
    100% {
      opacity: 0;
      transform: scale(0.5) translate(var(--sparkle-translate-x), var(--sparkle-translate-y));
      filter: blur(2px);
    }
  }
`;

export default function WandCursor() {
  const wandRef = useRef(null);
  const [imageFailed, setImageFailed] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const sparkleCounter = useRef(0);

  useEffect(() => {
    const wand = wandRef.current;
    if (!wand) return;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = sparkleAnimationCss;
    document.head.appendChild(styleTag);

    const moveWand = (e) => {
      if (wand) {
        const wandImg = wand.querySelector("img");
        const wandWidth = wandImg?.offsetWidth || 80;
        const wandHeight = wandImg?.offsetHeight || 80;

        // Offsets for positioning the wand image relative to the cursor
        // These position the wand image so its tip (top-left in its own coordinate system)
        // is at the cursor's exact (e.clientX, e.clientY)
        const wandOffsetX = wandWidth * 0.1; // Adjust this if the wand image isn't perfectly centered horizontally
        const wandOffsetY = wandHeight * 0.1; // Adjust this for the vertical position of the tip relative to image top

        wand.style.transform = `translate(${e.clientX - wandOffsetX}px, ${e.clientY - wandOffsetY}px)`;

        // --- Sparkle Logic ---
        if (Math.random() < 0.4) { // Increased frequency slightly for more visible trail
          // Calculate sparkle origin point based on wand's current position and image rotation
          // Assuming the wand image is rotated -45deg, its "tip" points roughly to top-right from its internal origin.
          // These values might need fine-tuning based on your specific wand image's pivot point and exact tip location.
          const SPARKLE_RELATIVE_X = wandWidth * 0.7; // X offset from cursor for sparkle origin (relative to wand's internal coords)
          const SPARKLE_RELATIVE_Y = wandHeight * 0.1; // Y offset from cursor for sparkle origin

          const sparkleX = e.clientX + SPARKLE_RELATIVE_X - wandOffsetX;
          const sparkleY = e.clientY + SPARKLE_RELATIVE_Y - wandOffsetY;


          const newSparkle = {
            id: sparkleCounter.current++,
            x: sparkleX, // Sparkle origin X
            y: sparkleY, // Sparkle origin Y
            // Random translation for sparkle drift
            translateX: `${(Math.random() - 0.5) * 40}px`, // -20px to 20px drift
            translateY: `${(Math.random() - 0.5) * 40}px`, // -20px to 20px drift
            duration: Math.random() * 0.8 + 0.7, // 0.7s to 1.5s
            size: Math.random() * 5 + 5, // 5px to 10px
          };

          setSparkles(prevSparkles => [...prevSparkles, newSparkle]);

          setTimeout(() => {
            setSparkles(prevSparkles => prevSparkles.filter(s => s.id !== newSparkle.id));
          }, newSparkle.duration * 1000 + 100);
        }
      }
    };

    window.addEventListener("mousemove", moveWand);
    return () => {
      window.removeEventListener("mousemove", moveWand);
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <>
      {/* Wand element */}
      <div
        ref={wandRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-100px, -100px)", // Initial off-screen position
          transition: "transform 0.05s linear", // Snappy follow transition
        }}
      >
        {!imageFailed ? (
          <img
            src="/magic-wand.png"
            alt="wand"
            onError={() => setImageFailed(true)}
            style={{
              width: "8vw",
              maxWidth: "80px",
              minWidth: "40px",
              height: "auto",
              filter: "drop-shadow(0 0 25px #fefe5b)",
              transform: "rotate(-45deg)", // The wand itself is rotated
            }}
          />
        ) : (
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              boxShadow: "0 0 20px 8px rgba(0, 0, 0, 0.5)",
            }}
          />
        )}
      </div>

      {/* Sparkle particles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          style={{
            position: 'fixed',
            top: sparkle.y,
            left: sparkle.x,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(254, 254, 91, 0.8)', // Your accent color
            filter: 'blur(1px)',
            pointerEvents: 'none',
            zIndex: 9998,
            animation: `sparkle-fade ${sparkle.duration}s forwards`,
            '--sparkle-translate-x': sparkle.translateX,
            '--sparkle-translate-y': sparkle.translateY,
          }}
        />
      ))}
    </>
  );
}