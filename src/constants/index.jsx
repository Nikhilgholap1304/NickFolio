import graffiti from "../assets/projects/graffiti1.png";
import weatherly from "../assets/projects/weatherly.png";
import animiz from "../assets/projects/animiz.png";
import yoghurtz from "../assets/projects/yoghurtz.png";

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
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "7",
    title: "Sign in",
    url: "#login",
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
    id: "2",
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
    id: "3",
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
