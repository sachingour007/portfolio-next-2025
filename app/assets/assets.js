import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import user_image_02 from "./user-image-02.jpeg";
import profile_img from "./profile-img.png";

export const assets = {
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  user_image_02,
};

export const workData = [
  {
    id: 1,
    featureProject: true,
    title: "Menterra project",
    description: "Frontend Project",
    bgImage: "/work-1.webp",
    liveLink: "https://menterra-project.netlify.app/",
    descriptionInDetail:
      "Developed a responsive and dynamic website, focusing on delivering user-friendly content and an intuitive interface. Implemented efficient UI rendering with a component-based architecture for scalability.",
    techStack: ["React", "SCSS"],
    features: [
      {
        heading: "Component-Based Architecture",
        details:
          "Ensuring scalability and maintainability for future enhancements.",
      },
      {
        heading: "Optimized Performance",
        details:
          "Utilized SCSS features like variables and mixins for better maintainability.",
      },
    ],
  },
  {
    id: 2,
    featureProject: true,
    title: "NetflixGPT",
    description: "Frontend + Firebase",
    bgImage: "/work-2.webp",
    liveLink: "https://netflixgpt-125a4.web.app/",
    descriptionInDetail:
      "A movie exploration platform showcasing the latest films organized by categories, offering detailed movie pages and a responsive design.",
    techStack: ["ReactJS", "Redux", "JavaScript", "SCSS", "Firebase"],
    features: [
      {
        heading: "Categories",
        details: "Top Most, Popular, Top Rated",
      },
      {
        heading: "Movie Details",
        details:
          "Runtime, Ratings, Trailers, Posters, Summary, Genres, Recommended Movies",
      },
      {
        heading: "Responsive Design",
        details: "Optimized for various screen sizes and devices.",
      },
    ],
  },
  {
    id: 3,
    featureProject: false,
    title: "Dev Tinder App",
    description: "Full Stack App",
    bgImage: "/work-3.webp",
    liveLink: "https://netflixgpt-125a4.web.app/",
    descriptionInDetail:
      "A developer-matching platform inspired by Tinder, allowing users to create profiles, view other developers, and match based on interests and skills. Built a clean UI, swipe-like interactions, and integrated Firebase authentication.",
    techStack: ["ReactJS", "Redux", "JavaScript", "SCSS", "Firebase"],
    features: [
      [
        {
          heading: "Swipe UI",
          details: "Tinder-like card interactions for browsing developers.",
        },
        {
          heading: "Match System",
          details:
            "Logic to match users based on interests or profile preferences.",
        },
        {
          heading: "Firebase Auth",
          details: "Used for secure login and user session management.",
        },
      ],
    ],
  },
  {
    id: 4,
    featureProject: true,
    title: "Incubate Fund",
    description: "Frontend + CMS",
    bgImage: "/work-4.webp",
    liveLink: "https://incubatefund.in/",
    descriptionInDetail:
      "Developed the complete frontend for a business portfolio website, focusing on clean UI, fast performance, and seamless responsiveness. Built custom templates in WordPress to ensure scalable content management and implemented smooth UI animations for a refined user experience.",
    techStack: ["Html", "SCSS", "JavaScript", "WordPress"],
    features: [
      {
        heading: "Custom Frontend Architecture",
        details:
          "Developed reusable UI components and responsive layouts for all sections.",
      },
      {
        heading: "WordPress Integration",
        details:
          "Implemented custom templates ensuring easy content updates via CMS.",
      },
      {
        heading: "Optimized UI Experience",
        details:
          "Added subtle animations and SCSS structure for clean and maintainable styling.",
      },
    ],
  },
  {
    id: 5,
    featureProject: true,
    title: "Suretech Infra",
    description: "Frontend + CMS",
    bgImage: "/work-5.webp",
    liveLink: "https://suretech.co.in/",
    descriptionInDetail:
      "Developed the frontend for a corporate website focused on showcasing industrial solutions. Built using custom WordPress templates with responsive layouts, optimized UI structure, and a clean presentation for their service offerings.",
    techStack: ["Html", "SCSS", "JavaScript", "WordPress"],
    features: [
      {
        heading: "Custom WordPress Templates",
        details:
          "Created structured and scalable templates to support dynamic content.",
      },
      {
        heading: "Responsive Interface",
        details:
          "Ensured seamless viewing experience across devices with a fully responsive layout.",
      },
      {
        heading: "Optimized UI Structure",
        details:
          "Implemented clean component styling using SCSS and improved page readability.",
      },
    ],
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web App Development",
    description:
      "Building scalable and responsive web apps using the MERN stack with a focus on performance and clean architecture.",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Frontend Engineering",
    description:
      "Creating pixel-perfect, dynamic UIs with React.js, Redux Toolkit, and modern tools like Framer Motion and Tailwind CSS.",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "Authentication & Security",
    description:
      "Implementing secure, role-based authentication and route protection using Firebase Auth, JWT, and middleware.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Backend Management",
    description:
      "Developing efficient server-side logic, REST APIs, and database schemas with Node.js, Express, and MongoDB.",
    link: "",
  },
];

export const infoList = [
  {
    id: 1,
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript, React Js, Express, Node Js, MongoDB",
  },
  {
    id: 2,
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "MCA in Computer Applications",
  },
  {
    id: 3,
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
