import React from 'react'
import { motion } from "framer-motion";

const Tools = () => {
    const icons = [
        {src: "/SVG's/git-svgrepo-com.svg", alt: "Git", delay: 0.3},
        {src: "/SVG's/github-color-svgrepo-com.svg", alt: "Github", delay: 0.7},
        {src: "/SVG's/vs-code-svgrepo-com.svg", alt:"VScode", delay:0.5},
        {src: "/SVG's/postman-icon-svgrepo-com.svg", alt:"Postman", delay: 0},
        {src: "/SVG's/sql-database-sql-azure-svgrepo-com.svg", alt: "SQL", delay: 0.9}
    ]
  return (
    <div>
      <div className="pt-8 px-50 pb-10">
      <h1 className="text-6xl">Tools</h1>
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
  )
}

export default Tools
