"use client";
import Image from "next/image";
import { assets } from "../assets/assets";
import Link from "next/link";
import { useThemeContext } from "../store/ThemeContext";
import { motion } from "motion/react";

const Homepage = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <section className="dark:bg-darkTheme lg:pt:[160px] h-auto pt-[130px] xl:h-screen xl:pt-[200px]">
      <div className="mx-auto flex w-full flex-col items-center justify-center lg:w-3/4 xl:w-3/5">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="h-28 w-28 overflow-hidden rounded-full md:h-40 md:w-40"
        >
          <Image src={assets.profile_img} alt="" />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-Ovo font28 text-charcoal dark:text-dark-text my-6 flex items-center gap-2.5 leading-[140%]"
        >
          Hi! I'm Sachin Gour
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </motion.h3>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-Ovo font80 dark:text-dark-text text-center leading-[100%] lowercase"
        >
          Full Stack developer based in Rajasthan.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font20 text-lightGray dark:text-dark-text font-Ovo max-w-auto mt-3.5 mb-9 text-center leading-[200%] md:max-w-2/3"
        >
          I am a Full Stack developer from Bundi, Rajasthan with 2 years of
          experience in The Minimalist Mumbai.
        </motion.p>

        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href={"#contact"}
            className="blactBtn"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href={"/Resume-Sachin Gour-g.pdf"}
            download
            className="whiteBtn"
          >
            My Resume
            <Image src={assets.download_icon} alt="" className="w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
