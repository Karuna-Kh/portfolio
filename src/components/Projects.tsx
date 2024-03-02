import React from "react";
import maclogo from "@/Assets/maclogo.png";
import projectlogo from '@/Assets/project.jpeg';

import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl"
      >
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
      snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20
      scrollbar-thumb-[#F7AB0B]/80"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
           items-center justify-center p-20 md:p-44"
          >
            <div className="w-full flex items-center justify-center">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={projectlogo.src}
                alt=""
                className="lg:w-[50%] w-[70%]"
              />
            </div>

            <div className="space-y-0 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7A80A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                A strong project description provides a roadmap for stakeholders
                and communicates the vision without getting bogged down in
                details. We’ve compiled expert tips and sample project
                descriptions to help you get started.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full absolute top-[30%] bg-[#F7AB0A]/10
      left-0 h-[500px] -skew-y-12"
      ></div>
    </motion.div>
  );
}

export default Projects;
