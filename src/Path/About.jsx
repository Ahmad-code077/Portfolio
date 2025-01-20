import { stacks } from '../data';
const About = () => {
  return (
    <main>
      <section className='mt-20 font-poppins' data-aos='zoom-in-down'>
        <div className='flex items-center gap-5 justify-center  flex-col '>
          <div className='flex items-center justify-center flex-col gap-2'>
            <h1 className='text-3xl font-bold tracking-tight md:text-5xl text-center'>
              About
            </h1>
            <h1 className='text-[#7127BA] text-3xl md:text-4xl font-bold '>
              Ahmad Mamoon
            </h1>
          </div>
          <div className='flex items-center justify-center  text-base sm:text-lg  text-center flex-col leading-7 gap-5 text-gray-300'>
            <p>
              Hello i'm Ahmad. I am a dedicated frontend developer with a
              passion for creating visually appealing and user-friendly web
              interfaces. My journey into the world of web development began in
              July 2023, sparked by an introduction to a wealth of YouTube
              tutorials provided by a friend of my big brother{' '}
              <span className='text-[#7127BA] text-2xl font-semibold'>
                <a href='https://hamidmehmood.vercel.app/ ' target='_blank'>
                  Hamid
                </a>
              </span>
              . These resources ignited my curiosity and fueled my determination
              to master the art of frontend development.
            </p>
            <p>
              Driven by Curiosity and Learning Since taking my first steps into
              the development world, I have been relentlessly driven by a desire
              to learn and grow. The initial tutorials laid a strong foundation,
              but my eagerness to understand the intricacies of web development
              has pushed me to dive deeper into the field. I continuously seek
              out new learning opportunities and challenge myself with complex
              projects to enhance my skills and knowledge.
            </p>
            <p>
              In this website I showcase my projects. I believe that writing
              what I have learned is the best way to remember things, and I can
              share my knowledge along the way. Find my all projects on my
              github id
            </p>
          </div>
          <div className='mt-8 flex flex-col  gap-2'>
            <div className='flex flex-col items-center justify-start gap-2 sm:gap-6'>
              <h1 className='text-xl md:text-2xl font-semibold tracking-tight'>
                Current Favorite Tech Stack
              </h1>
              <div className='flex justify-center gap-2  md:gap-3 text-whiteColor text-3xl  md:text-4xl py-8 sm:py-6 flex-wrap'>
                {stacks.map((item) => {
                  const { id, tip, url, image } = item;
                  return (
                    <div key={id} className='tooltip' data-tip={tip}>
                      {' '}
                      <a href={url}>{image}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
