import React from 'react'
import { motion } from "framer-motion";

const Frontend = () => {
    const icons = [
    { src: "/SVG's/html-5-logo-svgrepo-com.svg", alt: "HTML", delay: 0.2 },
    { src: "/SVG's/css-3-svgrepo-com.svg", alt: "CSS", delay: 0.7 },
    { src: "/SVG's/js-official-svgrepo-com.svg", alt: "JavaScript", delay: 0},
    { src: "/SVG's/tailwind-svgrepo-com.svg", alt: "Tailwind", delay: 0.5 },
    { src: "/SVG's/react-javascript-js-framework-facebook-svgrepo-com.svg", alt: "React", delay: 0.4 },
  ];

  return (
    <>
      <h1 className='text-6xl px-50 pb-10'>Frontend</h1>
      <div className='flex px-50 gap-10 h-[300px] overflow-hidden'>
        {icons.map((icon, idx) => (
          <motion.img
            key={idx}
            src={icon.src}
            alt={icon.alt}
            className='h-[200px]'
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
    </>
  )
}

export default Frontend
