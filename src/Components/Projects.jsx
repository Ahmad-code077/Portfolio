import project1 from '../assets/ProjectLink/proj14.png';
import project2 from '../assets/ProjectLink/proj15.png';
import iconSvg from '../assets/Project/icon.png';
import gradient from '../assets/hero_images/Gradient.svg';
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
                Instagram Video Downloader
              </h1>
              <div className=' py-2 px-3 bg-firstBox sm:relative z-10 sm:left-7 rounded-[14px]'>
                <p className='font-medium text-base text-gray-300 '>
                  A simple yet powerful tool for downloading Instagram videos
                  instantly. Just paste the video link, and our downloader
                  handles the rest—quick
                  <span className=' max-[470px]:hidden'>
                    , easy, and reliable for saving your favorite content in
                    high quality!
                  </span>
                </p>
              </div>
              <div className='flex gap-5 w-40 p-8'>
                <img src={iconSvg} alt='icon' />
              </div>
            </div>
            <div className=' rounded-[14px] max-w-md mx-auto sm:mx-0 shadow-[-11px_-9px_#2B0B3A] sm:hover:scale-[1.03] duration-300 ease-in-out sm:shadow-[-27px_-18px_#2B0B3A]'>
              <a
                href='https://instagram-video-dowloader.vercel.app/'
                target='_blank'
              >
                <img
                  className='h-full object-cover rounded-[14px] sm:hover:scale-[1.03] duration-300 ease-in-out'
                  src={project1}
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
              <a href='https://ideatech.ae/' target='_blank'>
                <img
                  className='h-full object-cover rounded-[14px] sm:hover:scale-[1.03] duration-300 ease-in-out'
                  src={project2}
                  alt='Project image'
                />
              </a>
            </div>
            <div className='mt-12 sm:mt-0 order-1 sm:order-2'>
              <div className='sm:pl-3 md:pl-8'>
                <span className='text-[#9857D3]'>Featured Project</span>
                <h1 className='text-3xl text-[#CCD6F6] font-semibold pb-8 '>
                  Sky Innovation
                </h1>
              </div>
              <div className='py-2 px-3 bg-secondBox sm:relative z-10 sm:right-7 rounded-[14px]'>
                <p className='font-medium text-base text-gray-300'>
                  Sky Innovation is a forward-thinking IT company committed to
                  delivering cutting-edge solutions for businesses.
                  <span className='max-[470px]:hidden'>
                    Our expertise spans web development, mobile app development,
                    and customized software solutions, empowering businesses to
                    thrive in the digital age.
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
