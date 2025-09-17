import { FaLinkedin } from 'react-icons/fa6';
import {
  SiDaisyui,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiShadcnui,
  SiTypescript,
} from 'react-icons/si';
import { RiNextjsFill, RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';


import { SiN8N } from "react-icons/si";

import {
  first,
  trustyoursurgeon,
  third,
  fourth,
  datingImage,
  ecommerceImage,
  TypeScript,
  javascript,
  react,
  nextjs,
  redux,
  tailwind,
  css,
  express,
  firstImg,
  secondImg,
  thirdImg,
  fourthImg,
  shadcn,
  git,
  github,
  node,
  mongo,
} from './assets';
import { TbBrandTypescript } from 'react-icons/tb';

export default [
  {
    id: 1,
    heading: 'Responsive Application ',
    para: [
      `Developed a highly responsive web application using React and Tailwind CSS, ensuring compatibility across various devices and browsers. `,
    ],
    image: firstImg,
    url: 'https://earning-app.vercel.app/',
  },
  {
    id: 2,
    heading: 'Single Page Application ',
    para: [
      `Architected and implemented a single page application (SPA) using React.js, enhancing the application's speed and responsiveness.`,
    ],
    image: secondImg,
    url: 'https://instagram-video-dowloader.vercel.app/',
  },
  {
    id: 3,
    heading: 'Interactive Dashboard ',
    para: [
      `Created an interactive dashboard with real-time updates and data visualization. 
     Designed and connected REST APIs, optimized database queries`, 
     `
     and used WebSocket to deliver live data for a smoother experience.`,
    ],
    image: thirdImg,
    url: 'https://digital-dashboard.netlify.app/profile/overview',
  },
  {
    id: 4,
    heading: 'Corporate Redesign',
    para: [
      `Focusing on modern design principles and improved user experience. Utilized HTML5, CSS3, and JavaScript,React and Tailwind to create responsive layouts`,
    ],
    image: fourthImg,
    url: 'https://ahmad-nextjs-blogs.vercel.app/',
  },
];

export const linkImages = [
  {
    id: 1,
    tip: 'See my projects on github',
    url: 'https://github.com/Ahmad-code077',

    image: <FaGithub />,
  },
  {
    id: 2,
    tip: 'Find me on Linkedin',
    url: 'https://www.linkedin.com/in/muhammad-ahmad077/',
    image: <FaLinkedin />,
  },
];

export const docsLinks = [
  {
    id: 1,
    text: 'Docs',
    link: '/docs',
  },
  {
    id: 2,
    text: 'Analytics',
    link: '/analytics',
  },
  {
    id: 3,
    text: 'Statistics',
    link: '/statistics',
  },
  {
    id: 4,
    text: 'Guestbook',
    link: '/guestbook',
  },
  {
    id: 5,
    text: 'Subscribe',
    link: '/subscribe',
  },
];

export const stacks = [
  {
    id: 1,
    tip: 'Next Js',
    url: 'https://nextjs.org/',
    image: <RiNextjsLine className='hover:scale-105 hover:text-[#7127BA]' />,
  },
  {
    id: 2,
    tip: 'React Js',
    url: 'https://react.dev/',
    image: <FaReact className='hover:scale-105 hover:text-[#7127BA]' />,
  },
  {
    id: 3,
    tip: 'JavaScript',
    url: 'https://www.javascript.com/',
    image: (
      <IoLogoJavascript className='hover:scale-105 hover:text-[#7127BA]' />
    ),
  },
  {
    id: 6,
    tip: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    image: <SiTypescript className='hover:scale-105 hover:text-[#7127BA]' />,
  },
  {
    id: 4,
    tip: 'Tailwind Css',
    url: 'https://tailwindcss.com/',
    image: (
      <RiTailwindCssFill className='hover:scale-105 hover:text-[#7127BA]' />
    ),
  },

  {
    id: 7,
    tip: 'ShadCn',
    url: 'https://ui.shadcn.com/',
    image: <SiShadcnui className='hover:scale-105 hover:text-[#7127BA]' />,
  },
  {
    id: 8,
    tip: 'Redux-Toolkit',
    url: 'https://redux-toolkit.js.org/',
    image: <SiRedux className='hover:scale-105 hover:text-[#7127BA]' />,
  },
    {
    id: 9,
    tip: 'n8n',
    url: 'https://n8n.io/',
    image: <SiN8N  className='hover:scale-105 hover:text-[#7127BA]' />,
  },    {
    id: 10,
    tip: 'Node.js',
    url: 'https://nodejs.org/',
    image: <FaNodeJs  className='hover:scale-105 hover:text-[#7127BA]' />,
  },
];
export const SkillsIconData = [
  {
    id: 1,
    image: TypeScript,
    link: 'https://www.typescriptlang.org/',
  },
  {
    id: 2,
    image: javascript,
    link: 'https://www.javascript.com/',
  },
  {
    id: 3,
    image: react,
    link: 'https://react.dev/',
  },
  {
    id: 4,
    image: nextjs,
    link: 'https://nextjs.org/',
  },
  {
    id: 5,
    image: redux,
    link: 'https://redux-toolkit.js.org/',
  },
  {
    id: 6,
    image: tailwind,
    link: 'https://tailwindcss.com/',
  },
  {
    id: 7,
    image: css,
    link: 'https://www.w3.org/Style/CSS/',
  },
  {
    id: 8,
    image: shadcn,
    link: 'https://ui.shadcn.com/',
  },
  {
    id: 9,
    image: git,
    link: 'https://git-scm.com/doc',
  },
  {
    id: 10,
    image: github,
    link: 'https://github.com',
  },
  {
    id: 11,
    image: express,
    link: 'https://expressjs.com/',
  },
  {
    id: 12,
    image: node,
    link: 'https://nodejs.org/',
  },
  {
    id: 13,
    image: mongo,
    link: 'https://www.mongodb.com/',
  },
];

export const projectData = [
  {
    id: 0,
    heading: 'Next Dating App',
    title: 'Modern dating platform ',
    images: [
      <RiNextjsFill />,
      <TbBrandTypescript />,
      <SiMongodb />,
      <RiTailwindCssFill />,
    ],
    pImage: datingImage,
    link: 'https://next-dating-app.vercel.app/',
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },
  {
    id: 2,
    heading: 'Trust Your Surgeon',
    title: 'Connecting patients with surgeons worldwide',
    images: [
      <RiNextjsFill />,
      <TbBrandTypescript />,
      <SiMongodb />,
      <RiTailwindCssFill />,
      <SiShadcnui />,
    ],
    pImage: trustyoursurgeon,
    link: 'https://trustyoursurgeon.com/', // replace with actual link if available
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },
  {
    id: 5,
    heading: 'E-Commerce App',
    title: 'Full-featured online shopping platform',
    images: [
      <FaReact />,
      <FaNodeJs />,
      <SiMongodb />,
      <RiTailwindCssFill />, // Styling with Tailwind CSS
    ],
    pImage: ecommerceImage, // replace with your actual image import
    link: 'https://e-commerce-shopping-experience.vercel.app/', // replace with your deployed link if different
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },
  {
    id: 1,
    heading: 'Instagram Video Downloader',
    title: 'Download Video by pasting link',
    images: [
      <RiNextjsFill />,
      <FaNodeJs />,
      <SiMongodb />,
      <RiTailwindCssFill />,
      <SiShadcnui />,
    ],
    pImage: first,
    link: 'https://instagram-video-dowloader.vercel.app/',
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },

  {
    id: 3,
    heading: 'Digital Dashboard',
    title: 'Digital Dashboard for Learning Purpose',
    images: [<FaReact />, <SiMongodb />, <FaNodeJs />],
    pImage: third,
    link: 'https://digital-dashboard.netlify.app/profile/overview',
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },
  {
    id: 4,
    heading: 'Blog site',
    title: 'Blog Site Exploring the world of ideas',
    images: [
      <RiNextjsFill />,
      <SiShadcnui />,
      <SiMongodb />,
      <FaNodeJs />,
      <RiTailwindCssFill />,
    ],
    pImage: fourth,
    link: 'https://ahmad-nextjs-blogs.vercel.app/',
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },
];
