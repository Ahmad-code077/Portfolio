import data from '../data';
import gradient from '../assets/hero_images/Gradient.svg';
const WorkExp = () => {
  return (
    <section className='max-w-[80vw]  mx-auto mt-12' data-aos='fade-up'>
      <h2 className='text-2xl p-6'>Work Experience</h2>
      <div className='relative flex text-center justify-center'>
        <img
          src={gradient}
          alt='Gradient images'
          className='absolute -z-10 hidden md:block md:max-w-64 md:top-[-48px] lg:max-w-[22rem] lg:top-[-70px]'
        />

        <div className='grid lg:grid-cols-2 gap-2'>
          {data.map((item) => {
            const { heading, para, id, image, url } = item;
            return (
              <div key={id} className='w-full '>
                <article className='border-t-[3px] border-[#7127BA] bg-customGradient h-max flex items-center justify-center m-3 p-4 rounded-md hover:scale-105 duration-100 ease-in-out'>
                  <div className='mr-4'>
                    <img
                      src={image}
                      alt={heading}
                      className='max-h-28 rounded-md'
                    />
                  </div>
                  <div className='text-start flex flex-col gap-2'>
                    <h4 className='text-base font-semibold sm:text-xl xl:text-2xl leading-3 '>
                      {heading}
                    </h4>
                    <div>
                      <p className='text-[12px] inline-block'>{para[0]}</p>
                    </div>
                    <div className='cursor-pointer relative link  ease-in-out duration-500  capitalize'>
                      <a className='z-10 p-5 text-base' href={url} target='_'>
                        Learn More
                      </a>
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
