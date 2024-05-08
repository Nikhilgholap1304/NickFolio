import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "../assets/Nickfolio_icon_colored.png";
import { navigation } from "../Constants";
import Button from "./Button";
import ButtonGradient from "../assets/svg/ButtonGradient";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

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
      nav.style.visibility = "visible";
      setOpenNavigation(true);
      setTimeout(() => {
        nav.style.opacity = 1;
      }, 300);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <>
      <div className=" relative w-screen h-screen overflow-x-hidden">
        <header
          className={`fixed z-50 left-0 top-0 w-full flex px-5 max-lg:py-4 justify-between items-center border-b border-n-6 lg:bg-n-8/90 
        lg:backdrop-blur-sm
        lg:px-7.5 ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
        >
          <a className=" flex gap-[0.5rem] items-center" href="#hero">
            <div className=" w-8 h-auto">
              <img
                className=" w-full object-cover"
                src={Logo}
                alt="NickFolio"
              />
            </div>
            <h1 className=" text-2xl font-black font-Concert">NickFolio</h1>
          </a>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent invisible lg:visible transition-opacity opacity-0 lg:opacity-100`}
            id="nav"
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`cursor-pointer font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
              ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6 py-4 lg:py-6 md:py-4 md:px-4 lg:-mr-0.25 lg:text-xs lg:font-semibold
               lg:leading-5 lg:hover:text-n-1 xl:px-8 ${
                 item.url === pathname.hash
                   ? "z-2 lg:text-n-1 text-color-1"
                   : "lg:text-n-1/50"
               } lg:leading-5 lg:hover:text-n-1`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>
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
      </div>
      <ButtonGradient />
    </>
  );
};

export default Header;
