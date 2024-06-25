import graffiti from "../assets/projects/graffiti1.png";
import weatherly from "../assets/projects/weatherly.png";
import animiz from "../assets/projects/animiz.png";
import yoghurtz from "../assets/projects/yoghurtz.png";
import chatopia from "../assets/projects/chatopia.png";

import Bootstrap from "../assets/skills/Bootstrap.png";
import CSS from "../assets/skills/CSS.png";
import Expressjs from "../assets/skills/Expressjs.png";
import Firebase from "../assets/skills/Firebase.png";
import Git from "../assets/skills/Git.png";
import Html from "../assets/skills/Html.png";
import JS from "../assets/skills/JS.png";
import MongoDB from "../assets/skills/MongoDB.png";
import Mongoose from "../assets/skills/Mongoose.png";
import MUI from "../assets/skills/MUI.png";
import Netlify from "../assets/skills/Netlify.png";
import NodeJs from "../assets/skills/NodeJs.png";
import Php from "../assets/skills/Php.png";
import Primereact from "../assets/skills/Primereact.png";
import React from "../assets/skills/React.png";
import SCSS from "../assets/skills/SCSS.png";
import SQL from "../assets/skills/SQL.png";
import Tailwind from "../assets/skills/Tailwind.png";
import Vercel from "../assets/skills/Vercel.png";
import Vitejs from "../assets/skills/Vitejs.png";
import Gitlab from "../assets/skills/Gitlab.png";

import Luffy from "../assets/testimonials/Luffy.png";
import Naruto from "../assets/testimonials/Naruto.png";
import Saitama from "../assets/testimonials/Saitama.png";
import Okabe from "../assets/testimonials/Okabe.png";
import Gojo from "../assets/testimonials/Gojo.png";
import Tanjiro from "../assets/testimonials/Tanjiro.png";
import Light from "../assets/testimonials/Light.png";
import Lelouch from "../assets/testimonials/Lelouch.png";

export const navigation = [
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "4",
    title: "Testimonials",
    url: "#testimonials",
  },
  {
    id: "5",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "6",
    title: "Github Repo",
    url: "https://github.com/Nikhilgholap1304/NickFolio",
    onlyMobile: true,
  },
  {
    id: "7",
    title: "Resume",
    url: "",
    onlyMobile: true,
  },
];

export const projects = [
  {
    id: "0",
    title: "The Graffiti",
    img: graffiti,
    link: {
      github: "https://github.com/Nikhilgholap1304/Graffiti",
      live: "https://github.com/Nikhilgholap1304/Graffiti",
    },
    tools: [
      "React",
      "NodeJs",
      "ExpressJs",
      "Mongodb",
      "Mongoose",
      "SCSS",
      "MUI",
      "PrimeReact",
      "Rest API's",
    ],
    shortdesc:
      "Graffiti is a social platform designed for frontend designer enthusiasts to share, discover, and engage with form of web designs with utilities from around the planet 🐱‍🏍.",
    fulldesc:
      "A design hub ✨, unveil the miracle for frontend designers. Graffiti is a social platform 🙌 designed for frontend designer enthusiasts to share, discover, and engage in the form of web designs with utilities from around the planet 🐱‍🏍. Users can upload their own design creations, explore references by other users, and connect with fellow designers. Whether you're a seasoned design artist or simply appreciate the vibrant supportive templates, Graffiti provides a space to showcase your talent and connect with like-minded individuals.",
  },
  {
    id: "1",
    title: "Chatopia",
    img: chatopia,
    link: {
      github: "https://github.com/Nikhilgholap1304/Chatopia",
      live: "https://github.com/Nikhilgholap1304/Chatopia",
    },
    tools: [
      "React",
      "Firebase",
      "Zustand",
      "Tailwind CSS",
      "Material Tailwind",
      "SCSS",
      "MUI",
      "Framer Motion",
      "Vercel"
    ],
    shortdesc:
      "Chatopia 🎫 is an comprehensive react chat app which can authorize persons via google and github register/login as Oauth latest. It has good UI, basic features, fully device responsive and still under construction.",
    fulldesc:
      "Chatopia 🎫 is an comprehensive react chat app which can authorize persons via google and github register/login as Oauth latest. It has good UI, basic features, fully device responsive and still under construction. Chatopia is a real-time chat application designed for seamless and instant communication 📱. Built using modern web technologies like React and Vite, Chatopia leverages Firebase for its backend services, including real-time database, authentication, and cloud storage. The app supports text messaging, multimedia sharing (photos, videos, and documents), and ensures a user-friendly experience with features such as message timestamps, read receipts, and blocking functionality.",
  },
  {
    id: "2",
    title: "Weatherly",
    img: weatherly,
    link: {
      github: "https://github.com/Nikhilgholap1304/Weatherly",
      live: "https://weatherly-nick.netlify.app",
    },
    tools: ["ReactJs", "WeatherAPI", "HtmlCssJs"],
    shortdesc:
      "Weatherly is a sleek React app backed by a powerful API, offering instant weather updates and a detailed 5-day forecast. With global coverage and customizable themes, it's your go-to companion for staying ahead of the weather ☔️.",
    fulldesc:
      "Weatherly is a sleek React app backed by a powerful API, offering instant weather updates and a detailed 5-day forecast. With global coverage and customizable themes, it's your go-to companion for staying ahead of the weather 🌍☔️.",
  },
  {
    id: "3",
    title: "Yoghurtz",
    img: yoghurtz,
    link: {
      github: "https://github.com/Nikhilgholap1304/Yoghurtz",
      live: "https://yoghurtz.vercel.app",
    },
    tools: ["Html5", "Css3", "Js"],
    shortdesc:
      "Frontend template for an online yogurt shop, featuring product showcase, contact form, and responsive design. Built with HTML, CSS, and JavaScript.",
    fulldesc:
      "Frontend template for an online yogurt shop, featuring product showcase, contact form, and responsive design. Built with HTML, CSS, and JavaScript.",
  },
  {
    id: "4",
    title: "Animiz",
    img: animiz,
    link: {
      github: "https://github.com/Nikhilgholap1304/Animiz",
      live: "https://animiz-nick.vercel.app/",
    },
    tools: ["Html", "Css", "Js"],
    shortdesc:
      "This project is a sleek and modern website dedicated to anime content, featuring a highly responsive design with dark/light mode switch and a working feedback form.",
    fulldesc:
      "This project is a sleek and modern website dedicated to anime content, featuring a highly responsive design with dark/light mode switch and a working feedback form. This website offers anime enthusiasts a visually appealing and user-friendly platform to explore their favorite anime series, movies, characters, and more. With its responsive design and dark/light mode switch, users can enjoy an optimized viewing experience across various devices and preferences.",
  },
];

export const skillSet = [
  {
    id: "0",
    title: "React",
    icon: React,
    width: 50,
    height: 50,
  },
  {
    id: "1",
    title: "Bootstrap",
    icon: Bootstrap,
    width: 50,
    height: 50,
  },
  {
    id: "2",
    title: "CSS",
    icon: CSS,
    width: 50,
    height: 50,
  },
  {
    id: "3",
    title: "Expressjs",
    icon: Expressjs,
    width: 50,
    height: 50,
  },
  {
    id: "4",
    title: "Firebase",
    icon: Firebase,
    width: 50,
    height: 50,
  },
  {
    id: "5",
    title: "Git",
    icon: Git,
    width: 50,
    height: 50,
  },
  {
    id: "6",
    title: "Html",
    icon: Html,
    width: 50,
    height: 50,
  },
  {
    id: "7",
    title: "JS",
    icon: JS,
    width: 50,
    height: 50,
  },
  {
    id: "8",
    title: "MongoDB",
    icon: MongoDB,
    width: 50,
    height: 50,
  },
  {
    id: "9",
    title: "Mongoose",
    icon: Mongoose,
    width: 50,
    height: 50,
  },
  {
    id: "10",
    title: "MUI",
    icon: MUI,
    width: 50,
    height: 50,
  },
  {
    id: "11",
    title: "Netlify",
    icon: Netlify,
    width: 50,
    height: 50,
  },
  {
    id: "12",
    title: "NodeJs",
    icon: NodeJs,
    width: 50,
    height: 50,
  },
  {
    id: "13",
    title: "Php",
    icon: Php,
    width: 50,
    height: 50,
  },
  {
    id: "14",
    title: "Primereact",
    icon: Primereact,
    width: 50,
    height: 50,
  },
  {
    id: "15",
    title: "Gitlab",
    icon: Gitlab,
    width: 50,
    height: 50,
  },
  {
    id: "16",
    title: "SCSS",
    icon: SCSS,
    width: 50,
    height: 50,
  },
  {
    id: "17",
    title: "SQL",
    icon: SQL,
    width: 50,
    height: 50,
  },
  {
    id: "18",
    title: "Tailwind",
    icon: Tailwind,
    width: 50,
    height: 50,
  },
  {
    id: "19",
    title: "Vercel",
    icon: Vercel,
    width: 50,
    height: 50,
  },
  {
    id: "20",
    title: "Vitejs",
    icon: Vitejs,
    width: 50,
    height: 50,
  },
];

export const testimonials = [
  {
    id: "1",
    title: "Monkey D Luffy",
    img: Luffy,
    subtitle: "One Piece",
    desc: "Hey, I'm Monkey D. Luffy! Nikhil is an amazing friend who never gives up and always pushes forward. He's super talented with all that tech stuff like React and NodeJs. If you need someone skilled and full of spirit, Nikhil is your person!",
  },
  {
    id: "2",
    title: "Naruto Uzumaki",
    img: Naruto,
    subtitle: "Naruto",
    desc: "Believe it! Nikhil is just like me, never backing down and always aiming for the top! He's a genius with tech, mastering React, NodeJs, and more. He never give up on their dreams and inspire everyone around them. If you want someone with true ninja spirit, Nikhil is your go-to person!",
  },
  {
    id: "3",
    title: "Saitama",
    img: Saitama,
    subtitle: "One Punch Man",
    desc: "Nikhil ? He's like the Saitama of the tech world. Unstoppable, efficient, and incredibly skilled with all the latest tools. He handle challenges effortlessly and keep things simple and effective. If you need someone who gets the job done with a punch, Nikhil is the one.",
  },
  {
    id: "4",
    title: "Okabe Rintaro",
    img: Okabe,
    subtitle: "Steins Gate",
    desc: "Greetings! Hououin Kyouma here to tell you about Mr.Nikhil. A true genius, his skills in coding are as mind-bending as time travel itself. he's dedicated, innovative, and always on the cutting edge of technology, Trust me."
  },
  {
    id: "5",
    title: "Satoru Gojo",
    img: Gojo,
    subtitle: "Jujutsu Kaisen",
    desc: "He is like the Gojo of the tech world. Unmatched skills, boundless creativity, and always ahead of the game. He see the big picture and execute flawlessly. If you need someone extraordinary to lead your projects, Nikhil is your best choice",
  },
  {
    id: "6",
    title: "Tanjiro Kamado",
    img: Tanjiro,
    subtitle: "Demon Slayer",
    desc: "Nikhil has a heart as strong as their coding skills. He is compassionate, hardworking, and always ready to help others improve. Just like I fight demons, He tackle complex problems with determination and skill. He is a true pillar in any team.",
  },
  {
    id: "7",
    title: "Light Yagami",
    img: Light,
    subtitle: "Death Note",
    desc: "Nikhil is a brilliant mind, excelling in every challenge He face. Their mastery of technology and keen problem-solving skills make them indispensable. Like a strategic genius, He always find the best solutions. If you want excellence, Nikhil is the key.",
  },
  {
    id: "8",
    title: "Lelouch vi Britannia",
    img: Lelouch,
    subtitle: "Code Geass",
    desc: "Nikhil possesses unparalleled intellect and strategic thinking. Their proficiency in tech is impressive, always planning ten steps ahead. Just like me, He lead with vision and precision. If you want a revolutionary in your team, Nikhil is the one to choose.",
  },
];
