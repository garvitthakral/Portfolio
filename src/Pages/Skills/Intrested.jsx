import React from "react";
import { motion } from "framer-motion";

const Intrested = () => {
  const icons = [
    { src: "/SVG's/typescript-logo-svgrepo-com.svg", alt: "typeScipt", delay: 0.3 },
    { src: "/SVG's/machine-learning-06-svgrepo-com.svg", alt: "machinelearning", delay: 0 },
    { src: "/SVG's/python-svgrepo-com.svg", alt: "Python", delay: 0.7 },
    { src: "/SVG's/ai-ai-svgrepo-com.svg", alt: "Ai", delay: 0.5 },
  ];
  return (
    <div>
      <div className="pt-8 px-50 pb-10">
        <h1 className="text-6xl">Intrested In</h1>
        <div className="flex gap-10 h-[300px] overflow-hidden ">
          {icons.map((icon, idx) => (
            <motion.img
              key={idx}
              src={icon.src}
              alt={icon.alt}
              className="h-[200px]"
              animate={{ y: [0, 50, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: icon.delay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intrested;
