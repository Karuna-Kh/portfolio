import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import hero_pic from "../Assets/Hero_pic.jpg";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Karunakh",
      "<Life is simple Code />",
      "<Life is simple Eat />",
      "<Life is simple Sleep />",
      "<Life is simple Repeat />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center 
      justify-center text-center overflow-hidden"
    >
      <BackgroundCircle />
      <Image
        src={hero_pic}
        alt="Hero Picture"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Web Developer
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
