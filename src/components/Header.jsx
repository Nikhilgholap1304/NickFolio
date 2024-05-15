import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "../assets/Nickfolio_icon_colored.png";
import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Reveal from "./Reveal";

const Header = ({activeSectionId}) => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  const toggleNavigation = () => {
    const nav = document.getElementById("nav");
    if (openNavigation) {
      nav.style.opacity = 0;
      setTimeout(() => {
        setOpenNavigation(false);
        nav.style.visibility = "hidden";
      }, 300);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      setTimeout(() => {
        nav.style.visibility = "visible";
        nav.style.opacity = 1;
      }, 300);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    const nav = document.getElementById("nav");
    if (!openNavigation) return;

    nav.style.opacity = 0;
    setTimeout(() => {
      setOpenNavigation(false);
      nav.style.visibility = "hidden";
    }, 300);
    enablePageScroll();
  };
  console.log(activeSectionId)
  return (
    <>
      <header
        className={`fixed z-50 left-0 top-0 w-full flex px-5 lg:py-[0.2rem] py-[1rem] 2xs:py-[1rem] max-lg:py-4 justify-between items-center border-b border-n-6 lg:bg-n-8/90 
        lg:backdrop-blur-sm transition-all
        lg:px-7.5 ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
      >
        <motion.a className=" flex gap-[0.5rem] items-center" href="#hero">
          <motion.div
            className=" w-8 h-auto"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
          >
            <img className=" w-full object-cover" src={Logo} alt="NickFolio" />
          </motion.div>
          <motion.h1
            className=" text-2xl font-black font-Concert"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            NickFolio
          </motion.h1>
        </motion.a>
        <motion.nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4.78rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent invisible lg:visible transition-opacity opacity-0 lg:opacity-100`}
          id="nav"
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                ref={ref}
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`cursor-pointer font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  openNavigation ? "opacity-100" : "opacity-0"
                } transition-opacity lg:opacity-100
              ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6 py-4 lg:py-6 md:py-4 md:px-4 lg:-mr-0.25 lg:text-xs lg:font-semibold
               lg:leading-5 transition-colors lg:hover:text-n-1 xl:px-8 ${
                 item.id == activeSectionId 
                   ? "z-2 lg:text-n-1 text-color-1"
                   : "lg:text-n-1/50"
               } lg:leading-5 lg:hover:text-n-1`}
              >
                <Reveal>{item.title}</Reveal>
              </a>
            ))}
          </div>
          <HamburgerMenu />
          <motion.div
            className={`absolute inset-0 z-0 pointer-events-none lg:invisible`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <Canvas>
              <Stars radius={50} count={200} factor={4} fade speed={1} />
            </Canvas>
          </motion.div>
        </motion.nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </header>
    </>
  );
};

export default Header;
