"use client";
import { assets, serviceData } from "../assets/assets";
import Image from "next/image";
import { useThemeContext } from "../store/ThemeContext";
import { motion } from "motion/react";

const Services = () => {
  const { isDark, toggleTheme } = useThemeContext();
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-full pt-36 md:max-w-4/5 lg:max-w-full xl:max-w-[90%] 2xl:max-w-[80%] mx-auto">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font24 font-Ovo text-charcoal text-center leading-[100%] dark:text-white"
        >
          What i offers
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font60 font-Ovo text-charcoal mt-3 mb-6 text-center leading-[100%] dark:text-white"
        >
          My services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="font-Ovo font20 text-lightGray mx-auto mb-14 max-w-2xl text-center leading-[160%] dark:text-white"
        >
          I create fast, responsive, and engaging web experiences using modern
          technologies and best development practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6"
        >
          {serviceData.map(({ icon, title, description, link }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="hover:bg-lightHover dark:hover:bg-darkHover cursor-pointer rounded-[10px] border-2 border-[#efefef] p-7 transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="font26 text-gra-700 font-Outfit my-4 font-medium text-[#282828] dark:text-white">
                {title}
              </h3>
              <p className="font16 font-Outfit mb-6 leading-[160%] text-[#797979] dark:text-white/80">
                {description}
              </p>
              {/* <a
                href={link}
                className="font-Outfit font16 flex items-center gap-3 text-[#282828] dark:text-white/80"
              >
                Read more
                <Image
                  src={
                    isDark === "dark"
                      ? assets.right_arrow_bold_dark
                      : assets.right_arrow
                  }
                  alt=""
                  className="w-4"
                />
              </a> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
