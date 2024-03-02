import React from "react";
import { motion } from "framer-motion";
import logopython from "@/Assets/python-logo.png";

type Props = {
  directionLeft?: boolean;
  index: number
};

function Skill({ directionLeft, index }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
          y: -200,
        }}
        // animate={{
        //   opacity:1,
        //   x:0
        // }}
        transition={{ duration: 1, delay: .2 * index }}
        whileInView={{ opacity: 1, y: 0 }}
        src={logopython.src}
        className="rounded-full border border-gray-500 object-cover
        w-20 h-20 xl:w-28 xl:h-28 filter group-hover:grayscale transition
        duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition
      duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24
      md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
