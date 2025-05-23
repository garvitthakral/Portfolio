import React from "react";
import { motion } from "framer-motion";

const Backend = () => {
  const icons = [
    { src: "/SVG's/node-js-svgrepo-com.svg", alt: "Node", delay: 0.5 },
    { src: "/SVG's/express-svgrepo-com.svg", alt: "express", delay: 0 },
    { src: "/SVG's/mongo-svgrepo-com.svg", alt: "Mongo", delay: 0.7 },
    { src: "/SVG's/java-svgrepo-com.svg", alt: "Java", delay: 0.3 },
  ];
  return (
    <div className="pt-8 px-50 pb-10">
      <h1 className="text-6xl">Backend</h1>
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
  );
};

export default Backend;
