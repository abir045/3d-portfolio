import {
  mobile,
  backend,
  creator,
  javascriptLogo,
  api,
  webTemplate,
  apiConf,
  reactLogo,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  aust,
  uia,
  carrent,
  jobit,
  tripguide,
  threejs,
  uiaWhite,
  coffeeroasters,
  pearson,
  photosnap,
  manage,
  netflix_clone,
  crypto,
  laptop,
} from "../assets";

import lingo from "../assets/lingo.png";
import visa from "../assets/visa.png";
import book from "../assets/book.png";
import esporta from "../assets/esporta.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const educations = [
  {
    title: "M.Sc in Information & Communication Technology",
    company_name: "University Of Agder, Norway",
    icon: uiaWhite,
    iconBg: "#383E56",
    date: "aug 2014 - jun 2016",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "B.Sc in Electrical & Electronic Engineering",
    company_name: "Ahsanullah University Of Science & Technology, Bangladesh",
    icon: aust,
    iconBg: "#383E56",
    date: "april 2007 - April 2011",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "E-Sporta",
    description:
      "Welcome to the E-Sporta. This is a platform dedicated to connecting users with fitness trainers and classes. Built with modern tools and frameworks, this app offers an intuitive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: esporta,
    source_code_link: "https://github.com/abir045/e-sporta-client",
    live_url: "https://esporta-e9ef7.web.app/",
  },

  // {
  //   name: "Laptop Recommendation System",
  //   description:
  //     "A Web-based platform that allows users to search and find laptops according to their requirements from two local vendors (Ryans & StarTech), providing a convenient and efficient solution.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },

  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: laptop,
  //   source_code_link: "https://github.com/abir045/Laptop-Recommendation-System",
  //   live_url: "https://laptop-recommendation-system.vercel.app/",
  // },

  {
    name: "Coffeeroasters",
    description:
      "A Web-based platform that allows users to search  and order coffee according to their choice from various options,providing a convenient and efficient solution for coffee needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: coffeeroasters,
    source_code_link: "https://github.com/abir045/coffeeroasters",
    live_url: "https://coffeeroasters-abir045.vercel.app/",
  },
  // {
  //   name: "Photosnap ",
  //   description:
  //     " A Multipage Web application that enables users to share photos",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: photosnap,
  //   source_code_link: "https://github.com/abir045/photosnap",
  //   live_url: "https://photosnap-abir045.vercel.app/",
  // },

  {
    name: "Visa Navigator",
    description:
      " A Single Page Web application that enables users browse through different type of visa's , apply and track applications",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
    ],
    image: visa,
    source_code_link: "https://github.com/abir045/visa-navigator-client",
    live_url: "https://visa-navigator-d10af.web.app/",
  },
  {
    name: "CryptoWorld",
    description:
      "A crypto info app  that allows users to view stats based on Coinranking api from RapidAPI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "chart js",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/abir045/cryptoApp",
    live_url: "https://world-of-crypto.netlify.app/",
  },
  // {
  //   name: "Pearson Airport Limousiness",
  //   description:
  //     "A limousine rental app  that allows users to book a limousine to and fro to  Pearson Airport Toronto.",
  //   tags: [
  //     {
  //       name: "Express JS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "googleapis",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: pearson,
  //   source_code_link: "https://github.com/abir045/LomousineTours",
  // },

  {
    name: "Library Management System - Book World",
    description:
      "In this website users can browse through collection of books, they can borrow a book for reading, they can return the book after reading. A user can also add a book and update a book.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: book,
    source_code_link:
      "https://github.com/abir045/library-management-system-client",
  },

  {
    name: "Lingo Bingo",
    description:
      "This  is a language learning single page application with authentication",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: lingo,
    source_code_link: "https://github.com/abir045/lingo-bingo",

    live_url: "https://lingo-bingo-6cead.web.app/",
  },

  // {
  //   name: "Netflix UI clone",
  //   description: "Netflix UI clone with React and Tailwind CSS.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },

  //     {
  //       name: "firebase",
  //       color: "green-text-gradient",
  //     },

  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: netflix_clone,
  //   source_code_link: "https://github.com/abir045/Netflix_React_Tailwind",
  //   live_url: "https://github.com/abir045/Netflix_React_Tailwind",
  // },
];

export { technologies, educations, experiences, projects };
