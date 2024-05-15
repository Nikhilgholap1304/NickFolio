import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <section
      className="relative bottom-0 left-0 right-0 w-full px-7 py-6"
      id="footer"
    >
      <div className="w-full flex items-center justify-around gap-3 2xs:flex-col 2xs:justify-center">
        <p className="text-lg opacity-40 text-center 2xs:text-base">
          Copyright &copy; {new Date().getFullYear()}. Nickfolio by&nbsp;
          <span className="text-violet-500">Nikhil.</span>&nbsp;All Rights
          Reserved.
        </p>
        <div className="flex gap-3 text-xl">
          <a
            href="https://github.com/Nikhilgholap1304"
            className="hover:text-violet-500 hover:opacity-100 transition-all opacity-30"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/nikhil__gholap1304/"
            className="hover:text-violet-400 hover:opacity-100 transition-all opacity-40"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-n-gholap/"
            className="hover:text-violet-400 hover:opacity-100 transition-all opacity-40"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://drive.google.com/file/d/1LjNHnJvOrRwglLfKe1M4AIYkrj3YUd2G/view?usp=drivesdk"
            className="hover:text-violet-400 hover:opacity-100 transition-all opacity-40"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
