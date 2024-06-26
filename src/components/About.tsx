import React from "react";
import { motion } from "framer-motion";
import about_pic from "../Assets/About_pic.jpg";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center items-center
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={about_pic}
          alt="About Picture"
          className="-mb-40 md:mb-0 flex-shrink-0 w-56 h-56 
        rounded-full object-cover md:rounded-lg md:w-[500px] md:h-[250px] 
        lg:w-[500px] lg:h-[400px]"
        />
      </motion.div>

      <div className="space-y-5 mt-5 md:space-y-10 px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base md:text-xl">
          {/* `&apos;` is `'` */}
          I&apos;m That Khunneng. I live in Preah Net Preah district, Banteay
          Mean Chey Province, Cambodia. My favorite is Coding. Thank for visit
          my Website!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
