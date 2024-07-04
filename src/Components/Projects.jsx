import project1 from '../assets/Project/proj1.png';
import project2 from '../assets/Project/Game.png';
import iconSvg from '../assets/Project/icon.svg';
import gradient from '../assets/hero_images/Gradient.svg';
const Projects = () => {
  return (
    <>
      <section className='mt-24 sm:mt-48  max-w-[87vw] mx-auto '>
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
          <div className=' font-poppins max-w-[90vw] mx-auto sm:flex md:max-w-[80vw] lg:max-w-[70vw] '>
            <div>
              <span className='text-[#9857D3]'>Featured Project</span>
              <h1 className='text-3xl text-[#CCD6F6] font-semibold pb-8 '>
                Shopping Cart
              </h1>
              <div className=' py-2 px-3 bg-firstBox sm:relative z-10 sm:left-7 rounded-[14px]'>
                <p className='font-medium text-xs text-gray-300 '>
                  Welcome to our innovative Shopping Cart project, a sleek and
                  efficient tool designed to enhance your online shopping
                  experience.{' '}
                  <span className=' max-[470px]:hidden'>
                    {' '}
                    This project provides a user-friendly interface where
                    customers can effortlessly browse products, add items to
                    their cart, and review their selections with ease
                  </span>
                </p>
              </div>
              <div className='flex gap-5 w-40 p-8'>
                <img src={iconSvg} alt='icon' />
                <img src={iconSvg} alt='icon' />
              </div>
            </div>
            <div className=' rounded-[14px] max-w-md mx-auto sm:mx-0 shadow-[-11px_-9px_#2B0B3A] sm:hover:scale-[1.03] duration-100 ease-in-out sm:shadow-[-27px_-18px_#2B0B3A]'>
              <a
                href='https://shoping-cart-react-reduxtoolkit.netlify.app/'
                target='_blank'
              >
                <img
                  className='h-full object-cover rounded-[14px] sm:hover:scale-[1.03] duration-100 ease-in-out'
                  src={project1}
                  alt='Project image'
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className='mt-12 sm:mt-48 max-w-[85vw] mx-auto'>
        <div className='flex relative items-center justify-start'>
          <img
            src={gradient}
            alt='Gradient'
            className='hidden -z-10 absolute sm:block -bottom-[70px] h-[500px] sm:-left-[100px] md:-left-20 lg:left-0'
          />
          <div className='flex flex-col sm:flex-row font-poppins max-w-[90vw] mx-auto  md:max-w-[80vw] lg:max-w-[70vw] '>
            <div className='rounded-[14px] max-w-md mx-auto sm:mx-0 shadow-[-11px_-9px_#2B0B3A] sm:hover:scale-[1.03] duration-100 ease-in-out sm:shadow-[-27px_-18px_#2B0B3A] order-2 sm:order-1'>
              <a
                href='https://resturant-menu-react-app.netlify.app/'
                target='_blank'
              >
                <img
                  className='h-full object-cover rounded-[14px] sm:hover:scale-[1.03] duration-100 ease-in-out'
                  src={project2}
                  alt='Project image'
                />
              </a>
            </div>
            <div className='mt-12 sm:mt-0 order-1 sm:order-2'>
              <div className='sm:pl-3 md:pl-8'>
                <span className='text-[#9857D3]'>Featured Project</span>
                <h1 className='text-3xl text-[#CCD6F6] font-semibold pb-8 '>
                  Restaurant Menu
                </h1>
              </div>
              <div className=' py-2 px-3 bg-secondBox sm:relative z-10 sm:right-7 rounded-[14px]'>
                <p className='font-medium text-xs text-gray-300'>
                  Welcome to our culinary haven.Our menu is a symphony of
                  flavors, combining the freshest ingredients with innovative
                  culinary techniques.{' '}
                  <span className='max-[470px]:hidden'>
                    From succulent appetizers to mouth-watering main courses and
                    decadent desserts, every item on our menu is designed to
                    provide a delightful dining experience.
                  </span>
                </p>
              </div>
              <div className='flex gap-5 w-40 p-8'>
                <img src={iconSvg} alt='icon' />
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
