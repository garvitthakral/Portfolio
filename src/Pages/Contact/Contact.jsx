import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const Icons = [
    {
      to: "https://github.com/garvitthakral",
      size: "large",
      title: "Github",
      src: "/SVG's/github-color-svgrepo-com.svg"
    },
    {
      to: "https://www.linkedin.com/in/garvit-thakral-23a0a130a/",
      size: "large",
      title: "Linkedin",
      src: "/SVG's/linkedin-linked-in-svgrepo-com.svg"
    },
    {
      to: "mailto:thakralgarvit1@gmail.com",
      size: "large",
      title: "Email",
      src: "/SVG's/gmail-svgrepo-com.svg"
    },
    {
      to: "https://wa.me/918570896390",
      size: "large",
      title: "WhatsApp",
      src: "/SVG's/whatsapp-whats-app-svgrepo-com.svg"
    },
    {
      to: "https://x.com/thakral_garvit",
      size: "large",
      title: "X",
      src: "/SVG's/twitter-color-svgrepo-com.svg"
    },
  ];
  return (
    <div className="px-40">
      <h1 className="text-6xl py-8">Socials:</h1>
      <div className="flex justify-around gap-8 flex-wrap py-8">
        {Icons.slice(0, 3).map((social, idx) => {
          const Icon = social.icon;
          return (
            <NavLink
              key={idx}
              to={social.to}
              className={
                "bg-bgS h-[200px] w-[200px] flex flex-col justify-center items-center rounded-2xl hover:scale-110 duration-300 ease-in-out hover:bg-white/30"
              }
            >
              <img src={social.src} alt={social.title} className="h-[100px]" />
              <h1 className="text-3xl pt-5">{social.title}</h1>
            </NavLink>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-around items-center py-10 px-50">
        <a
          href="https://wa.me/918570896390"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bgS h-[200px] w-[200px] flex flex-col justify-center items-center rounded-2xl hover:scale-110 duration-300 ease-in-out hover:bg-white/30"
        >
          <img src="/SVG's/whatsapp-whats-app-svgrepo-com.svg" alt="Whats app"  className="h-[100px]"/>
          <h1 className="text-3xl pt-5">WhatsApp</h1>
        </a>
        <NavLink to={"https://x.com/thakral_garvit"} className="bg-bgS h-[200px] w-[200px] flex flex-col justify-center items-center rounded-2xl hover:scale-110 duration-300 ease-in-out hover:bg-white/30">
        <img src="/SVG's/twitter-color-svgrepo-com.svg" alt="X" className="h-[100px]"/>
        <h1 className="text-3xl pt-5">Twitter</h1>
      </NavLink>
      </div>
    </div>
  );
};

export default Contact;
