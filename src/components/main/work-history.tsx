"use client";

import React from "react";
import { motion } from "framer-motion";
import { JOB_SOURCES } from "@/constants/job-data";
import Image from "next/image";

export const WorkHistory = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 py-5">
            Work History</h2>
          <p className="text-gray-200 text-lg">My professional journey</p>
        </motion.div>

        <div className="flex flex-col items-center gap-8 md:gap-12 w-full px-2 md:px-4 max-w-[95%] md:max-w-[1200px]">
          {/* Current Role - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3 mx-auto"
          >
            <div className="bg-[#0C0C0C] p-6 rounded-xl border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={JOB_SOURCES[0].companyLogo}
                    alt={JOB_SOURCES[0].company}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {JOB_SOURCES[0].jobTitle}
                  </h3>
                  <p className="text-blue-400 font-medium mb-1">{JOB_SOURCES[0].company}</p>
                  <p className="text-gray-400 text-sm mb-3">{JOB_SOURCES[0].dates}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {JOB_SOURCES[0].summary}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Past Roles - Grid with alternating animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {JOB_SOURCES.slice(1).map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 50
              }}
              className="bg-[#0C0C0C50] p-6 rounded-xl border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={job.companyLogo}
                    alt={job.company}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {job.jobTitle}
                  </h3>
                  <p className="text-blue-400 font-medium mb-1">{job.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{job.dates}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {job.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-0 absolute flex items-center justify-center bg-[#030014]">
          <div className="h-[60%] w-[60%] relative">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
          </div>
        </div>
      </div>
    </section>
  );
};
