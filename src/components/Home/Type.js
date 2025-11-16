import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
       "Aspiring Software Developer",
       "Full Stack Learner",
       "C++ & JavaScript Programmer",
       "React & Next.js Developer",
       "Web Development Enthusiast",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
