import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between 
      max-w-7xl mx-auto z-20 xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.youtube.com/@khunneng007"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.facebook.com/khun.neng.3"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          network="telegram"
          url="https://t.me/KhunNeng"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.instagram.com/khun_neng_ymt"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="#contact"
        />
        <p
          className="uppercase p-4 hidden md:inline-flex 
          text-sm text-gray-400"
        >
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
