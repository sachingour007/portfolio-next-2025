"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { useThemeContext } from "../store/ThemeContext";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { isDark, toggleTheme } = useThemeContext();

  const sidebarHandlerOpen = () => {
    setIsSidebarOpen(true);
  };
  const sidebarHandlerClose = () => {
    setIsSidebarOpen(false);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });

    return () => {
      document.removeEventListener("scroll");
    };
  }, []);

  return (
    <header>
      <div className="fixed top-0 left-0 -z-10 w-full translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`fixed top-0 z-50 flex w-full py-4 ${isScroll ? "bg-[rgba(255, 255, 255, 0.5)] dark:bg-darkTheme shadow-sm backdrop-blur-lg dark:shadow-white/20" : " "}`}
      >
        <div className="wrapper flex w-full items-center justify-between">
          <Link href="#top">
            <LogoSvg color={isDark === "dark" ? "#fff" : "#000"} />
          </Link>

          <ul
            className={`hidden items-center gap-6 rounded-full px-12 py-3 lg:gap-8 xl:flex ${isScroll ? "" : "bg-[rgba(255, 255, 255, 0.5)] shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}
          >
            <li>
              <Link className="menuLi" href={"#top"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="menuLi" href={"#about"}>
                About me
              </Link>
            </li>
            <li>
              <Link className="menuLi" href={"#services"}>
                Services
              </Link>
            </li>
            <li>
              <Link className="menuLi" href={"#work"}>
                My work
              </Link>
            </li>
            <li>
              <Link className="menuLi" href={"#contact"}>
                Connect me
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="cursor-pointer">
              {isDark === "dark" ? (
                <Image src={assets.sun_icon} alt="" className="w-6" />
              ) : (
                <Image src={assets.moon_icon} alt="" className="w-6" />
              )}
            </button>

            <Link
              href={"#contact"}
              className="menuLi dark:hover:bg-darkHover ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 xl:flex dark:border-white/50 transform duration-500 ease-in-out"
            >
              Contact
              <Image
                src={
                  isDark === "dark" ? assets.arrow_icon_dark : assets.arrow_icon
                }
                alt="arrow"
                className="w-3"
              />
            </Link>
            <button
              className="ml-3 block xl:hidden"
              onClick={sidebarHandlerOpen}
            >
              <Image
                src={isDark === "dark" ? assets.menu_white : assets.menu_black}
                alt=""
                className="w-6"
              />
            </button>
          </div>
        </div>

        {/*-----Mobile Menu---- */}

        <ul
          className={`dark:bg-darkHover fixed top-0 right-0 bottom-0 z-50 flex h-screen w-64 flex-col gap-4 bg-rose-50 px-10 py-20 delay-150 duration-700 ease-in-out xl:hidden ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} `}
        >
          <div className="absolute top-6 right-6">
            <Image
              src={isDark === "dark" ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
              onClick={sidebarHandlerClose}
            />
          </div>

          <li>
            <Link
              className="menuLi"
              href={"#top"}
              onClick={sidebarHandlerClose}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="menuLi"
              href={"#about"}
              onClick={sidebarHandlerClose}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              className="menuLi"
              href={"#services"}
              onClick={sidebarHandlerClose}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="menuLi"
              href={"#work"}
              onClick={sidebarHandlerClose}
            >
              My work
            </Link>
          </li>
          <li>
            <Link
              className="menuLi"
              href={"#contact"}
              onClick={sidebarHandlerClose}
            >
              Connect me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
