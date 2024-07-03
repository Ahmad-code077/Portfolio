import { FaRegCopyright } from 'react-icons/fa6';
import { BsDashCircleDotted } from 'react-icons/bs';
import { linkImages, docsLinks } from '../data';
import { useState, useEffect, useRef } from 'react';
import { CiMail } from 'react-icons/ci';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const initialTooltipContent =
    'Click the mail logo to copy ahmadeveloper077@gmail.com';
  const [toolTip, setToolTip] = useState(initialTooltipContent);
  const timeoutRef = useRef(null);
  const handleCopy = () => {
    setToolTip('Copied to clipboard  🥳 ahmadeveloper077@gmail.com');
    navigator.clipboard.writeText('ahmadeveloper077@gmail.com');

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setToolTip(initialTooltipContent);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <footer id='footer'>
      <div className='flex items-center justify-center flex-col gap-10 border-t border-[#9858D3] border-opacity-35 mt-16 font-poppins'>
        <ul className='flex items-center justify-center flex-wrap gap-5 pt-4 text-lg'>
          {docsLinks.map((item) => {
            const { id, text } = item;
            return (
              <li key={id} className='footer-link border-dashed border-b'>
                <a href='#'>{text}</a>
              </li>
            );
          })}
        </ul>
        <div className='flex items-center justify-center flex-col gap-2'>
          <h1 className='text-xl tracking-widest'>Reach me out</h1>
          <div className='flex items-center justify-center gap-5 text-2xl text-[#9858D3]'>
            <div
              data-tip={toolTip}
              onClick={handleCopy}
              className={`${isHovered ? 'tooltip' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href='#footer'>{<CiMail />}</a>
            </div>
            {linkImages.map((item) => {
              const { id, tip, url, image } = item;
              return (
                <div
                  key={id}
                  className={`${isHovered ? 'tooltip' : ''}`}
                  data-tip={tip}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    {image}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-2 pb-2'>
          <FaRegCopyright className='text-xl text-[#9858D3]' />
          <p>Ahmad {new Date().getFullYear()}</p>
          <BsDashCircleDotted className='text-[#9858D3]' />
          <p>Got any feedback?</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
