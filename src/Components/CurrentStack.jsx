import { SkillsIconData } from '../data';
import bottomSvg from '../assets/CurrentStack/Skills-2.svg';
const CurrentStack = () => {
  let firstRowSkill = SkillsIconData.slice(0, 7);
  let SecondRowSkill = SkillsIconData.slice(7);

  return (
    <section
      className=' mt-20 mx-auto  sm:mt-28 mb-8'
      data-aos='fade-up'
      data-aos-duration='1000'
    >
      <h1 className='text-2xl md:3xl mb-8 text-center mx-auto'>
        Skill Proficiency: <span className='text-[#7127BA]'> Embracing </span>{' '}
        the Learning Curve
      </h1>
      <div className='flex items-center justify-center  '>
        <div className='flex items-center justify-center flex-wrap   file:gap-1 flex-col'>
          <div className='flex  justify-center gap-1  flex-col sm:gap-4'>
            <div className='flex min-[400px]:gap-2 sm:gap-4 '>
              {firstRowSkill.map((item) => {
                const { id, image, link } = item;
                return (
                  <a href={link} target='_blank' key={id}>
                    <div className=' h-5 w-5 rounded-[50%] bg-[#251C31]  min-[400px]:h-6 min-[400px]:w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8'>
                      <img
                        src={image}
                        alt='image'
                        className='object-contain p-[2px] h-full w-full'
                      />
                    </div>
                  </a>
                );
              })}
            </div>
            <div className='flex justify-center min-[400px]:gap-2 min-[550px]:gap-3 sm:gap-4 '>
              {SecondRowSkill.map((item) => {
                const { id, image, link } = item;
                return (
                  <a href={link} target='_blank' key={id}>
                    <div className=' h-5 w-5 rounded-[50%] bg-[#251C31] min-[400px]:h-6 min-[400px]:w-6  sm:h-7 sm:w-7 lg:h-8 lg:w-8'>
                      <img
                        src={image}
                        alt='image'
                        className='object-contain p-[2px] h-full w-full'
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className='max-w-[792px]'>
            <img src={bottomSvg} alt='something wrong happend' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CurrentStack;
