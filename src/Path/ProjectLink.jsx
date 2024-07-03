import cutt from '../assets/CurrentStack/Skills-2.svg';
import { projectData } from '../data';
const ProjectLink = () => {
  return (
    <main className='mt-20'>
      <section className='font-poppins '>
        <div className='flex flex-col gap-6 max-w-[88vw] min-[480px]:max-w-[480px] md:max-w-[90vw] mx-auto'>
          <div className='flex justify-start flex-col items-start gap-3 pb-5'>
            <h1 className='text-3xl font-bold md:text-5xl'>Projects</h1>
            <p className='text-xs text-gray-300 md:text-base'>
              Showcase of your works on website development
            </p>
          </div>

          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 items-start justify-start'>
            {projectData.map((item) => {
              const { id, heading, title, images, pImage, buttonSvg } = item;

              return (
                <div
                  key={id}
                  className='flex flex-col p-4 md:gap-3  justify-start gap-2 border border-gray-600 rounded hover:scale-105 duration-100 ease-in-out h-full'
                >
                  <div>
                    <h1 className='text-xl'>{heading}</h1>
                    <p className='text-xs text-gray-300 md:text-base'>
                      {title}
                    </p>
                  </div>
                  <div className='flex items-start justify-start gap-3 text-2xl'>
                    {images.map((item, index) => {
                      return <span key={index}>{item}</span>;
                    })}
                  </div>
                  <img
                    className='rounded bg-slate-600 flex-grow'
                    src={pImage}
                    alt='Project image'
                  />
                  <div className='footer-link w-28 mt-5 flex items-center justify-start hover:scale-x-105 text-[#7127BA] border-b border-dotted'>
                    <a href=''>See More</a>
                    {buttonSvg}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default ProjectLink;
