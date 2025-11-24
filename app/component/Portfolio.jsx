"use client";
import { assets, workData } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useThemeContext } from "../store/ThemeContext";
import { motion } from "motion/react";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const Portfolio = () => {
  const { isDark, toggleTheme } = useThemeContext();
  const [selectedProject, setSelectedProject] = useState(null);

  const onClose = () => {
    document.body.classList.remove("scrollStop");
    setSelectedProject(null);
  };

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto max-w-full pt-36 md:max-w-4/5 lg:max-w-full xl:max-w-[90%] 2xl:max-w-[80%]">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font24 font-Ovo text-charcoal text-center leading-[100%] dark:text-white"
        >
          My portfolio
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font60 font-Ovo text-charcoal mt-3 mb-6 text-center leading-[100%] dark:text-white"
        >
          My latest work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="font-Ovo font20 text-lightGray mx-auto mb-14 max-w-2xl text-center leading-[160%] dark:text-white"
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in Full Stack Development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 dark:text-black"
        >
          {workData.map((item) => {
            if (!item.featureProject) {
              return null;
            }
            return (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                style={{ backgroundImage: `url(${item.bgImage})` }}
                className="group dark:border-darkHover relative aspect-square cursor-pointer rounded-lg border border-[#efefef] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:z-0 before:rounded-lg before:bg-black/20"
                onClick={() => setSelectedProject(item)}
              >
                <div className="absolute bottom-5 left-1/2 flex w-10/12 -translate-x-1/2 items-center justify-between rounded-md bg-white px-5 py-3 duration-500 group-hover:bottom-7">
                  <div>
                    <h2 className="font-Outfit font18 font-semibold text-[#2a2a2a]">
                      {item.title}
                    </h2>
                    <p className="font-Outfit font16 font-normal text-[#5e5e5e] lowercase">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex aspect-square w-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
                    <Image
                      src={assets.send_icon}
                      alt="send-icon"
                      className="w-5"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={onClose}
            project={selectedProject}
          />
        </motion.div>
        {/* <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          href="/project-listing"
          className="font-18 font-Outfit hover:bg-lightHover dark:hover:bg-darkHover mx-auto my-20 flex w-max items-center justify-center gap-2 rounded-full border border-gray-700 px-10 py-3 text-gray-700 duration-500 dark:border-white dark:text-white"
        >
          Show more
          <Image
            src={
              isDark === "dark"
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt=""
            className="w-4"
          />
        </motion.a> */}
      </div>
    </motion.section>
  );
};

export default Portfolio;
