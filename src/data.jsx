import { FaLinkedin } from 'react-icons/fa6';
import {
  SiDaisyui,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';
import { RiNextjsFill, RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import {
  first,
  second,
  third,
  fourth,
  rect1,
  rect2,
  rect3,
  rect4,
  rect5,
  rect6,
  rect7,
  rect8,
  rect9,
  rect10,
  rect11,
  rect12,
  rect13,
  firstImg,
  secondImg,
  thirdImg,
  fourthImg,
} from './assets';

export default [
  {
    id: 1,
    heading: 'Responsive Application ',
    para: [
      `Developed a highly responsive web application using React and Tailwind CSS, ensuring compatibility across various devices and browsers. `,
    ],
    image: firstImg,
    url: 'https://www.w3schools.com/css/css_rwd_intro.asp',
  },
  {
    id: 2,
    heading: 'Single Page Application ',
    para: [
      `Architected and implemented a single page application (SPA) using React.js, enhancing the application's speed and responsiveness.`,
    ],
    image: secondImg,
    url: 'https://medium.com/@diegogauna.developer/creating-a-single-page-app-spa-in-react-using-react-router-db37b89b3f73',
  },
  {
    id: 3,
    heading: 'Interactive Dashboard ',
    para: [
      `Created an interactive and visually appealing dashboard for data visualization. Optimized the dashboard for performance, resulting in a 40% faster data rendering time.`,
    ],
    image: thirdImg,
    url: 'https://www.phocassoftware.com/resources/blog/what-is-an-interactive-dashboard',
  },
  {
    id: 4,
    heading: 'Corporate Redesign',
    para: [
      `Focusing on modern design principles and improved user experience. Utilized HTML5, CSS3, and JavaScript,React and Tailwind to create responsive layouts`,
    ],
    image: fourthImg,
    url: 'https://react.dev/',
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
    id: 4,
    tip: 'Tailwind Css',
    url: 'https://tailwindcss.com/',
    image: (
      <RiTailwindCssFill className='hover:scale-105 hover:text-[#7127BA]' />
    ),
  },
  {
    id: 5,
    tip: 'Prisma',
    url: 'https://www.prisma.io',
    image: <SiPrisma className='hover:scale-105 hover:text-[#7127BA]' />,
  },

  {
    id: 6,
    tip: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    image: <SiTypescript className='hover:scale-105 hover:text-[#7127BA]' />,
  },
  {
    id: 7,
    tip: 'Daisy UI',
    url: 'https://daisyui.com/',
    image: <SiDaisyui className='hover:scale-105 hover:text-[#7127BA]' />,
  },
  {
    id: 8,
    tip: 'Redux-Toolkit',
    url: 'https://redux-toolkit.js.org/',
    image: <SiRedux className='hover:scale-105 hover:text-[#7127BA]' />,
  },
];
export const SkillsIconData = [
  {
    id: 1,
    image: rect1,
    link: 'https://www.figma.com/',
  },
  {
    id: 2,
    image: rect2,
    link: 'https://react.dev/',
  },
  {
    id: 3,
    image: rect3,
    link: 'https://tailwindcss.com/',
  },
  {
    id: 4,
    image: rect4,
    link: 'https://nodejs.org/en/',
  },
  {
    id: 5,
    image: rect5,
    link: 'https://adobexdplatform.com/',
  },
  {
    id: 6,
    image: rect6,
    link: 'https://www.javascript.com/',
  },
  {
    id: 7,
    image: rect7,
    link: 'https://www.w3.org/Style/CSS/',
  },
  {
    id: 8,
    image: rect8,
    link: 'https://redux-toolkit.js.org/',
  },
  {
    id: 9,
    image: rect9,
    link: 'https://nextjs.org/',
  },
  {
    id: 10,
    image: rect10,
    link: 'https://www.adobe.com/products/illustrator.html',
  },
  {
    id: 11,
    image: rect11,
    link: 'https://www.adobe.com/products/illustrator.html',
  },
  {
    id: 12,
    image: rect12,
    link: 'https://expressjs.com/',
  },
  {
    id: 13,
    image: rect13,
    link: 'https://www.mongodb.com/',
  },
];

export const projectData = [
  {
    id: 1,
    heading: 'Instagram Video Downloader',
    title: 'Download Video by pasting link',
    images: [<FaReact />, <FaNodeJs />, <RiNextjsFill />],
    pImage: first,
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },
  {
    id: 2,
    heading: 'EasyControl',
    title: 'EasyControl Sass Application Providing benefits',
    images: [<FaReact />, <SiRedux />, <RiTailwindCssFill />],
    pImage: second,
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },
  {
    id: 3,
    heading: 'Admin Dashboard',
    title: 'Admin Dashboard for mobile application.',
    images: [<FaReact />, <SiMongodb />, <FaNodeJs />],
    pImage: third,
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },
  {
    id: 4,
    heading: 'Hi world',
    title: 'Social Media Application to show my skill to classmates.',
    images: [<FaReact />, <SiMongodb />, <FaNodeJs />, <SiRedux />],
    pImage: fourth,
    buttonSvg: <MdOutlineKeyboardArrowRight className='animate-move text-xl' />,
  },
];
