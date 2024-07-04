import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { SiMongodb } from 'react-icons/si';
import { RiNextjsLine } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoVercel } from 'react-icons/io5';
import { FaNodeJs } from 'react-icons/fa';
import first from './assets/ProjectLink/Firstimage.jpeg';
import second from './assets/ProjectLink/Secondimage.jpeg';
import third from './assets/ProjectLink/Thirdimage.jpeg';
import fourth from './assets/ProjectLink/Fourthimage.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { SiRedux } from 'react-icons/si';
import rect1 from './assets/SkillsIcon/Rectangle 1.svg';
import rect2 from './assets/SkillsIcon/Rectangle 2.svg';
import rect3 from './assets/SkillsIcon/tailwind 3.svg';
import rect4 from './assets/SkillsIcon/Rectangle 4.svg';
import rect5 from './assets/SkillsIcon/Rectangle 5.svg';
import rect6 from './assets/SkillsIcon/Rectangle 6.svg';
import rect7 from './assets/SkillsIcon/Rectangle 7.svg';
import rect8 from './assets/SkillsIcon/Rectangle 8.svg';
import rect9 from './assets/SkillsIcon/Rectangle 9.svg';
import rect10 from './assets/SkillsIcon/Rectangle 10.svg';
import rect11 from './assets/SkillsIcon/Rectangle 11.svg';
import rect12 from './assets/SkillsIcon/Rectangle 12.svg';
import rect13 from './assets/SkillsIcon/Rectangle 13.svg';

import firstImg from '../src/assets/data_images/first.svg';
import secondImg from '../src/assets/data_images/second.svg';
import thirdImg from '../src/assets/data_images/third.svg';
import fourthImg from '../src/assets/data_images/fourth.svg';
import { Link } from 'react-router-dom';
export default [
  {
    id: 1,
    heading: 'CIB on the Mobile		',
    para: `Take your client onboard seamlessly by our amazing
tool of digital onboard process.`,
    image: firstImg,
  },
  {
    id: 2,
    heading: 'CIB on the Mobile		',
    para: `Take your client onboard seamlessly by our amazing
tool of digital onboard process.`,
    image: secondImg,
  },
  {
    id: 3,
    heading: 'CIB on the Mobile		',
    para: `Take your client onboard seamlessly by our amazing
tool of digital onboard process.`,
    image: thirdImg,
  },
  {
    id: 4,
    heading: 'CIB on the Mobile		',
    para: `Take your client onboard seamlessly by our amazing
tool of digital onboard process.`,
    image: fourthImg,
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
    url: 'https://www.linkedin.com/in/muhammad-ahmad-5847502b0/',

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
    tip: 'SWR By Vercel',
    url: 'https://swr.vercel.app/',

    image: <IoLogoVercel className='hover:scale-105 hover:text-[#7127BA]' />,
  },
  {
    id: 6,
    tip: 'Node Js',
    url: 'https://nodejs.org/en/',

    image: <FaNodeJs className='hover:scale-105 hover:text-[#7127BA]' />,
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
    heading: 'E-learning',
    title:
      'E-learning Application with 3 role including student , teacher & admin',
    images: [<FaReact />, <SiMongodb />, <FaNodeJs />],
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
