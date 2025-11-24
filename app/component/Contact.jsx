"use client";
import React, { useState } from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import { useThemeContext } from "../store/ThemeContext";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");
  const { isDark, toggleTheme } = useThemeContext();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "01ac50cf-efef-4438-90f8-675b4869d780");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");

    if (data.success) {
      event.target.reset();
      setTimeout(() => setResult(""), 3000);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='bg-[url("/footer-bg-color.png")] bg-size-[90%_auto] bg-center bg-no-repeat px-0 pt-36 lg:px-40 dark:bg-none'>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font24 font-Ovo text-charcoal text-center leading-[100%] dark:text-white"
        >
          Connect with me
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font60 font-Ovo text-charcoal mt-3 mb-6 text-center leading-[100%] dark:text-white"
        >
          Get in touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="font-Ovo font20 text-lightGray mx-auto mb-14 max-w-2xl text-center leading-[160%] dark:text-white"
        >
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mx-auto max-w-2xl"
          onSubmit={onSubmit}
        >
          <div className="mt-10 mb-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            <motion.input
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              className="dark:bg-darkHover/30 flex-1 rounded-md border border-gray-400 bg-white p-3 outline-none dark:border-white/90 dark:text-white"
            />
            <motion.input
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              type="text"
              placeholder="Enter your email"
              name="email"
              required
              className="dark:bg-darkHover/30 flex-1 rounded-md border border-gray-400 bg-white p-3 outline-none dark:border-white/90 dark:text-white"
            />
          </div>
          <motion.textarea
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            rows="6"
            placeholder="Enter your message"
            name="message"
            required
            className="dark:bg-darkHover/30 mb-6 w-full resize-none rounded-md border border-gray-400 bg-white p-4 outline-none dark:border-white/90 dark:text-white"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="dark:hover:bg-darkHover mx-auto flex w-max cursor-pointer items-center justify-center gap-2 rounded-full bg-black/80 px-6 py-3 text-white duration-500 hover:bg-black dark:border dark:bg-transparent"
          >
            Submit Now
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.button>
          <p className="mt-4 text-center">{result}</p>
        </motion.form>
      </div>
    </motion.section>
  );
};

// 01ac50cf-efef-4438-90f8-675b4869d780
export default Contact;
