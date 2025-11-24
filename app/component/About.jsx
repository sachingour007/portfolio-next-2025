"use client";
import Image from "next/image";
import React from "react";
import { assets, infoList, toolsData } from "../assets/assets";
import { useThemeContext } from "../store/ThemeContext";
import { motion } from "motion/react";

const About = () => {
  const { isDark, toggleTheme } = useThemeContext();
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full"
    >
      <div className="mx-auto max-w-full pt-36 md:max-w-4/5 lg:max-w-full xl:max-w-[90%] 2xl:max-w-[80%]">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font24 font-Ovo text-charcoal text-center leading-[100%] dark:text-white"
        >
          Introduction
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font60 font-Ovo text-charcoal mt-3 text-center leading-[100%] dark:text-white"
        >
          About me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-10 xl:mt-20 xl:gap-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl md:w-[70%] lg:w-[30%]"
          >
            <Image src={assets.user_image_02} alt="" className="rounded-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1"
          >
            <p className="font-Ovo font20 text-lightGray leading-[160%] dark:text-white">
              I'm a Frontend Developer currently working at The Minimalist,
              where I transform UI/UX designs into functional web experiences. I
              focus on clean code, responsive layouts and improving user
              experience on every project I work on.
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="my-5 grid max-w-full grid-cols-1 gap-6 lg:my-8 lg:max-w-2xl lg:grid-cols-3 xl:my-10"
            >
              {infoList.map(({ icon, iconDark, title, description }) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={title}
                  className="hover:bg-lightHover dark:hover:bg-darkHover/50 cursor-pointer rounded-xl border border-[#D8D8D8] p-5 duration-500 hover:-translate-y-1 hover:shadow-black dark:border-white dark:hover:shadow-white"
                >
                  <Image
                    src={isDark === "dark" ? iconDark : icon}
                    alt={title}
                    className="mt-3 w-7"
                  />
                  <h3 className="font-Outfit font20 my-4 font-medium text-[#494949] dark:text-white">
                    {title}
                  </h3>
                  <p className="font-Outfit font16 leading-[160%] font-normal text-[#797979] dark:text-white/80">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="font-Ovo font20 my-6 text-[#868686] dark:text-white/80"
            >
              Tools I use
            </motion.h4>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-5"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className="sm-w-14 flex aspect-square w-12 cursor-pointer items-center justify-center rounded-lg border border-gray-400 duration-500 hover:-translate-y-1 dark:border-white"
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
