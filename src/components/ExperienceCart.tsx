import React from "react";
import { motion } from "framer-motion";
import exp_pic from "@/Assets/Experience_pic.jpg";
import logo_js from "@/Assets/logo-javascript-icon.png";
import Image from "next/image";

type Props = {};

function ExperienceCart({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center
    bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src={exp_pic}
          alt="Experience Picture"
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] 
        object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">Senior of Programming</h4>
        <p className="font-bold text-xl md:text-3xl mt-1">Chnnour Meanchey</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src={logo_js}
            alt="JavaScript Icon"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={logo_js}
            alt="JavaScript Icon"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={logo_js}
            alt="JavaScript Icon"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={logo_js}
            alt="JavaScript Icon"
          />
        </div>
        <p className="uppercase pt-5 pb-4 text-gray-300">
          Started: 29-2-2019 - Ended: 02-10-2023
        </p>
        <ul className="list-disc space-y-3 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCart;
