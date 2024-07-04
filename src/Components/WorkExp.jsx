import data from '../data';
import gradient from '../assets/hero_images/Gradient.svg';
const WorkExp = () => {
  return (
    <section className='max-w-[80vw]  mx-auto mt-12'>
      <h2 className='text-2xl p-6'>Work Experience</h2>
      <div className='relative flex text-center justify-center'>
        <img
          src={gradient}
          alt='Gradient images'
          className='absolute -z-10 hidden md:block md:max-w-64 md:top-[-48px] lg:max-w-[22rem] lg:top-[-70px]'
        />

        <div className='flex flex-wrap font-poppins'>
          {data.map((item) => {
            const { heading, para, id, image } = item;
            return (
              <div key={id} className='w-full md:w-1/2 p-2'>
                <article className='border-t-[3px] border-[#7127BA] bg-customGradient max-h-48 flex items-center justify-center m-3 p-4 rounded-md hover:scale-105 duration-100 ease-in-out'>
                  <div className='mr-4'>
                    <img
                      src={image}
                      alt={heading}
                      className='max-h-28 rounded-md'
                    />
                  </div>
                  <div className='text-start flex flex-col gap-2'>
                    <h4 className='text-xs font-semibold sm:text-2xl md:text-[1.12rem] xl:text-3xl'>
                      {heading}
                    </h4>
                    <p className='text-[8px]'>{para}</p>
                    <div className='cursor-pointer relative link  ease-in-out duration-500 w-[67.49px] capitalize'>
                      <a className='z-10'>Learn More</a>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WorkExp;
