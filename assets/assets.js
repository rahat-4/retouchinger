import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
// technology icons now served from /public/technologies
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
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
import image_one from "./image_1.jpg";
import img_one from "./img_one.jpeg";
import img_two from "./img_two.jpg";
import img_three from "./img_three.jpg";
import img_four from "./img_four.jpg";
import img_five from "./img_five.jpg";
import soft_icon from "./soft_icon.png";

export const assets = {
  soft_icon,
  img_one,
  img_two,
  img_three,
  img_four,
  img_five,
  image_one,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  // technology images moved to /public/technologies
  right_arrow_white,
  logo,
  logo_dark,
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
};

export const workData = [
  {
    title: "QOP CRM",
    description:
      "A secure web-based portal for managing mortgage enquiries and applications through the One Mortgage System platform.",
    bgImage: "/work/qopcrm.png",
    link: "https://qopcrm.com",
  },
  {
    title: "Afrobeutic",
    description: "Salon management System that connects clients with salons.",
    bgImage: "/work/afrobeutic.png",
    link: "https://afrobeutic-frontend.vercel.app/",
  },
  {
    title: "Chefbot CRM",
    description:
      "Restaurant management platform that handle automatic booking with AI Agent.",
    bgImage: "/work/chefbot.png",
    link: "https://crm.chef-bot.de/",
  },
  {
    title: "Supplers",
    description: "Multi vendor e-commerce platform for furniture.",
    bgImage: "/work/supplers.png",
    link: "https://www.supplers.com/",
  },
  {
    title: "Cardicheck",
    description: "Telemedicine platform for cardiology patients.",
    bgImage: "/work/cardicheck.png",
    link: "https://cardicheck.vercel.app/en",
  },
  {
    title: "Pharmik",
    description: "Pharmacy management system for local pharmacies.",
    bgImage: "/work/pharmik.png",
    link: "https://www.pharmik.co/",
  },
  {
    title: "ProHr",
    description: "HR management system for small and medium businesses.",
    bgImage: "/work/prohr.png",
    link: "https://www.prohr.io/",
  },
  {
    title: "Sebagriho",
    description: "Healthcare management system for clinics and hospitals.",
    bgImage: "/work/sebagriho.png",
    link: "https://www.sebagriho.com/",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Custom Software Solutions",
    description:
      "I design and build custom software solutions such as business management systems, dashboards, and data-driven applications tailored to your specific needs.",
    link: "",
  },
  {
    icon: assets.web_icon,
    title: "Web App Design & Development",
    description:
      "I develop modern, responsive, and scalable web applications using technologies like React, Next.js, and Django, focused on performance and user experience.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile App Development",
    description:
      "I create high-performance mobile applications with clean UI and smooth user experience, ensuring reliability, scalability, and security.",
    link: "",
  },
  {
    icon: assets.ai_icon ?? assets.web_icon,
    title: "AI Agents & Chatbots",
    description:
      "I build intelligent AI agents and chatbots for customer support, lead generation, and internal automation using modern AI and NLP technologies.",
    link: "",
  },
  {
    icon: assets.automation_icon ?? assets.web_icon,
    title: "Automation Tools & Workflows",
    description:
      "I develop automation tools to streamline business processes, reduce manual work, and improve efficiency using APIs, AI, and custom scripts.",
    link: "",
  },
  // {
  //   icon: assets.graphics_icon,
  //   title: "Quality Assurance & Testing",
  //   description:
  //     "I ensure software reliability through testing, debugging, performance optimization, and code reviews to deliver high-quality applications.",
  //   link: "",
  // },
  {
    icon: assets.graphics_icon,
    title: "Photo Editing Services",
    description:
      "I develop dynamic, responsive, and scalable web applications using Django, React, and Next.js.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript ReactJs, NextJs, Python, Django, SQL, MySQL",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "BSc in Computer Science and Engineering",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  "/technologies/Python.png",
  "/technologies/JavaScript.png",
  "/technologies/C.png",
  "/technologies/C++-(CPlusPlus).png",
  "/technologies/Django.png",
  "/technologies/Django-REST.png",
  "/technologies/SQLAlchemy.png",
  "/technologies/React.png",
  "/technologies/Next.js.png",
  "/technologies/Express.png",
  "/technologies/Node.js.png",
  "/technologies/Redux.png",
  "/technologies/Flutter.png",
  "/technologies/HTML5.png",
  "/technologies/CSS3.png",
  "/technologies/Tailwind-CSS.png",
  "/technologies/Bootstrap.png",
  "/technologies/PostgresSQL.png",
  "/technologies/MySQL.png",
  "/technologies/Redis.png",
  "/technologies/AWS.png",
  "/technologies/Digital-Ocean.png",
  "/technologies/Git.png",
  "/technologies/Github.png",
  "/technologies/Docker.png",
  "/technologies/Figma.png",
  "/technologies/Swagger.png",
  "/technologies/Ubuntu.png",
];
