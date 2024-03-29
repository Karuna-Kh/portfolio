import React from "react";
import { motion } from "framer-motion";
import ExperienceCart from "./ExperienceCart";

type Props = {};

const WorkExperience = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hiddin flex-col text-left
      max-w-full px-5 gap-10 justify-evenly mx-auto items-center"
    >
      <div className="flex justify-center items-center py-10">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>
      </div>
      <div
        className="md:w-[600px] xl:w-[900px] w-full flex space-x-5 overflow-x-scroll py-5 snap-x snap-mandatory
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0B]/80"
      >
        <ExperienceCart />
        <ExperienceCart />
        <ExperienceCart />
        <ExperienceCart />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
