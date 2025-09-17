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
             Hello, I'm Ahmad. I am a dedicated full stack developer with a passion for building
  responsive, user-friendly applications from front to back. My journey into the world of web development began in
              July 2023, sparked by an introduction to a wealth of YouTube
              tutorials provided by a friend of my big brother{' '}
              <span className='text-[#7127BA] text-2xl font-semibold'>
                <a href='https://hamidmehmood.vercel.app/ ' target='_blank'>
                  Hamid
                </a>
              </span>
              . Those early resources fueled my curiosity and determination, turning a simple hobby
  into a career.
            </p>
            <p>
      What started with designing clean, modern interfaces soon grew into a deep interest in
  backend systems, databases, and API development. Today, I work confidently across the
  full stack, using technologies like React, Next.js, Node.js, Express, PostgreSQL, and
  MongoDB to deliver complete, scalable applications. I enjoy building features that are
  not only functional but also optimized for performance and real-time interaction.
            </p>
            <p>
              In this website I showcase my projects. I believe that writing
              what I have learned is the best way to remember things, and I can
              share my knowledge along the way. Find my all projects on my{' '}
              <span className='text-[#7127BA] text-2xl font-semibold'>
                <a href='https://github.com/ahmad-code077/' target='_blank'>
                  Github
                </a>
              </span>
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
