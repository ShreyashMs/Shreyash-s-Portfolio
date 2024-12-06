"use client";

import React, { useState } from "react";

import { skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Skills = () => {
  const [play, setPlay] = useState(true); // track the state of which image to show

  const playSpiderman = () => {
    setPlay(false); // Hide the GIF and show the PNG when hovered
  };
  const resetSpiderman = () => {
    setPlay(true); // Reset to show GIF and hide PNG when mouse leaves
  };

  return (
    <section id="testimonials">
      <div className="h-10">
        {play ? (
          <img
            src="/walkingspiderman.gif"
            alt="Spider-Man GIF"
            className={`h-12 w-16 self-center rotate-90 scale-y-[-1] lg:translate-y-0 transition-opacity duration-300 md:translate-y-4 sm:translate-y-10`}
          />
        ) : (
          <img
            src="/spiderman.png"
            alt="Spider-Man PNG"
            className={`h-10 w-12 self-center transition-opacity duration-300 lg:translate-y-0 md:translate-y-4 sm:translate-y-10`}
          />
        )}
      </div>

      <div className="flex flex-col items-center max-lg:mt-5">
        <div
          className="group rounded-md flex antialiased items-center justify-center relative overflow-hidden bg-purple"
          onMouseEnter={playSpiderman}
          onMouseLeave={resetSpiderman}
        >
          <InfiniteMovingCards items={skills} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
