"use client";
import Image from "next/image";
import LogoSvg from "./LogoSvg";
import { assets } from "../assets/assets";
import { useThemeContext } from "../store/ThemeContext";

const Footer = () => {
  const { isDark, toggleTheme } = useThemeContext();
  return (
    <footer className="dark:bg-darkTheme pt-20">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center">
          <LogoSvg color={isDark === "dark" ? "#fff" : "#000"} />
          <p className="font-Outfit font18 mx-auto flex w-max items-center gap-2 leading-[100%] text-[#797979] dark:text-white/80">
            <Image
              src={isDark === "dark" ? assets.mail_icon_dark : assets.mail_icon}
              alt=""
              className="w-6"
            />
            gour.sachin.sg@gmail.com
          </p>
        </div>
        <div className="mt-12 items-center justify-between border-t border-gray-400 py-6 text-center sm:flex">
          <p className="font-Outfit font18 text-[#626262] dark:text-white/80">
            © 2025 Sachin Gour. All rights reserved.
          </p>
          <ul className="mt-4 flex items-center justify-center gap-10 sm:mt-0">
            <li className="font-Outfit font18 text-[#626262] dark:text-white/80">
              <a href="insta" target="_blank">
                GitHub
              </a>
            </li>
            <li className="font-Outfit font18 text-[#626262] dark:text-white/80">
              <a href="insta" target="_blank">
                LinkdIn
              </a>
            </li>
            <li className="font-Outfit font18 text-[#626262] dark:text-white/80">
              <a href="insta" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
