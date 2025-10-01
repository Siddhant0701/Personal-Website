"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-[20] gap-10"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start items-center md:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[12px] border border-blue-400 opacity-[0.95]"
        >
          <SparklesIcon className="text-blue-300 mr-[12px] h-6 w-6" />
          <h1 className="Welcome-text text-[16px] font-semibold">
            Software Engineer @ Amazon AWS
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Building Resilient Distributed Systems
            </span>
            {" "} & {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
              Advancing AI/ML Solutions
            </span>
            .
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-full md:max-w-[600px]"
        >
          Hi, I&apos;m Siddhant Mahajan. I specialize in distributed systems,
          event-driven architecture, developer tooling, and machine learning
          solutions. I love tackling ambitious, unique projects—especially those
          that are fun, technically challenging, and push me to explore new ideas.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full md:w-[240px] text-sm"
        >
          Explore My Work
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {/* <Image
          src="/hero-bg.svg"
          alt="Siddhant Mahajan"
          height={320}
          width={320}
          draggable={false}
          className="select-none md:w-[650px] md:h-[650px] w-[220px] h-[220px]"
        /> */}
      </motion.div>
    </motion.div>
  );
};
