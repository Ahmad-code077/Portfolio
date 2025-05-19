import iconSvg from '../assets/Project/icon.png';
import gradient from '../assets/hero_images/Gradient.svg';
import { trustyoursurgeon, datingImage } from '../assets';
const Projects = () => {
  return (
    <>
      <section
        className='mt-24 sm:mt-48  max-w-[87vw] mx-auto'
        data-aos='zoom-in-down'
      >
        <div className='flex relative items-center justify-center'>
          <img
            src={gradient}
            alt='Gradient'
            className='hidden -z-10 absolute sm:block -bottom-[70px] h-[500px]'
          />
          <img
            src={gradient}
            alt='Gradient'
            className='hidden -z-10 absolute sm:block -bottom-[70px] h-[500px] sm:right-0 md:right-[70px] lg:right-[120px] xl:right-[150px]'
          />
          <div className=' font-poppins  sm:flex max-w-5xl mx-auto '>
            <div>
              <span className='text-[#9857D3]'>Featured Project</span>
              <h1 className='text-3xl text-[#CCD6F6] font-semibold pb-8 '>
                Love Finder Dating Site
              </h1>
              <div className=' py-2 px-3 bg-firstBox sm:relative z-10 sm:left-7 rounded-[14px]'>
                <p className='font-medium text-base text-gray-300 '>
                  A modern real-time dating platform built with Next.js 15 App
                  Router, featuring swipe-based matching, real-time chat, and
                  dynamic user profiles.
                  <span className=' max-[470px]:hidden'>
                    &nbsp; Experience seamless connections and smart matchmaking
                    powered by modern UI and backend tech.
                  </span>
                </p>
              </div>
              <div className='flex gap-5 w-40 p-8'>
                <img src={iconSvg} alt='icon' />
              </div>
            </div>
            <div className=' rounded-[14px] max-w-md mx-auto sm:mx-0 shadow-[-11px_-9px_#2B0B3A] sm:hover:scale-[1.03] duration-300 ease-in-out sm:shadow-[-27px_-18px_#2B0B3A]'>
              <a href='https://next-dating-app.vercel.app/' target='_blank'>
                <img
                  className='h-full object-cover rounded-[14px] sm:hover:scale-[1.03] duration-300 ease-in-out'
                  src={datingImage}
                  alt='Project image'
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <section
        className='mt-12 sm:mt-48 max-w-[85vw] mx-auto'
        data-aos='zoom-in-up'
      >
        <div className='flex relative items-center justify-start'>
          <img
            src={gradient}
            alt='Gradient'
            className='hidden -z-10 absolute sm:block -bottom-[70px] h-[500px] sm:-left-[100px] md:-left-20 lg:left-0'
          />
          <div className='flex flex-col sm:flex-row font-poppins max-w-5xl mx-auto   '>
            <div className='rounded-[14px] max-w-md mx-auto sm:mx-0 shadow-[-11px_-9px_#2B0B3A] sm:hover:scale-[1.03] duration-300 ease-in-out sm:shadow-[-27px_-18px_#2B0B3A] order-2 sm:order-1'>
              <a href='https://www.trustyoursurgeon.com/' target='_blank'>
                <img
                  className='h-full object-cover rounded-[14px] sm:hover:scale-[1.03] duration-300 ease-in-out'
                  src={trustyoursurgeon}
                  alt='Project image'
                />
              </a>
            </div>
            <div className='mt-12 sm:mt-0 order-1 sm:order-2'>
              <div className='sm:pl-3 md:pl-8'>
                <span className='text-[#9857D3]'>Featured Project</span>
                <h1 className='text-3xl text-[#CCD6F6] font-semibold pb-8 '>
                  Trust Your Surgeon
                </h1>
              </div>
              <div className='py-2 px-3 bg-secondBox sm:relative z-10 sm:right-7 rounded-[14px]'>
                <p className='font-medium text-base text-gray-300'>
                  A global platform connecting patients with trusted surgeons.
                  <span className='max-[470px]:hidden'>
                    Includes profile management, query posting, real-time chat,
                    and secure payments. Built for healthcare with a focus on
                    trust and communication.
                  </span>
                </p>
              </div>

              <div className='flex gap-5 w-40 p-8'>
                <img src={iconSvg} alt='icon' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
