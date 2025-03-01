import gradient from '../assets/hero_images/Gradient.svg';
import me from '../assets/hero_images/Me.png';
import arrow from '../assets/hero_images/Arrow.png';

const HeroSection = () => {
  return (
    <>
      <section className='mt-20 ' data-aos='fade-up'>
        <div className='  mx-auto  flex items-center justify-center flex-col sm:flex-row lg:gap-12 '>
          <div className='relative'>
            <div className=' flex absolute left-20 top-[-12px] sm:w-[277px] sm:left-[156px] '>
              <img src={arrow} alt='Arrow svg' className='w-14' />
              <span className='text-lg sm:text-2xl '>
                Hello! I Am{' '}
                <span className='text-[#7127BA] whitespace-normal sm:whitespace-nowrap'>
                  Ahmad Mamoon
                </span>
              </span>
            </div>
            <div>
              <img
                src={gradient}
                alt='Background gradient'
                className='max-w-36 sm:max-w-72'
              />

              <img
                src={me}
                alt='Picture of person'
                className='max-w-28 absolute top-7 left-5 sm:max-w-48 sm:top-14  sm:left-16'
              />
            </div>
          </div>
          <div
            className='relative sm:flex sm:flex-col sm:text-start text-center '
            data-aos='fade-up'
            data-aos-duration='1600'
          >
            <p className='font-[400] text-base  sm:text-lg'>A Developer who</p>
            <h3 className='font-[400] text-4xl md:text-5xl '>Judges a book</h3>
            <h3 className='font-[400] text-4xl md:5xl'>
              by its{' '}
              <span className=' relative inline-block p-2 before:content-[""] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0  before:border-[1px] before:rounded-customEgg before:rotate-[9deg] '>
                <span className='text-[#7127BA]'>Cover</span>
              </span>
              ...
            </h3>
            <p className='mt-1 text-base sm:text-lg'>
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
