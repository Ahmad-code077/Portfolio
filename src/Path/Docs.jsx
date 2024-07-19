const Docs = () => {
  return (
    <main
      className='max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]  mx-auto mt-24'
      data-aos='fade-right'
    >
      <section className='flex flex-col gap-6 '>
        <div className='flex items-start justify-start flex-col gap-2'>
          <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>
            Docs
          </h1>
          <p className='text-gray-300 leading-7'>
            Welcome to the documentation for my portfolio site! This document
            provides an overview of the site's features, project structure,
            installation steps, usage, and other relevant information.
          </p>
        </div>
        <div className='flex items-start justify-start flex-col gap-5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-4xl'>
            Introduction
          </h1>
          <p className='text-gray-300 leading-7'>
            This site is designed to showcase my skills, projects, and work
            experience in web development. It serves as a comprehensive platform
            where visitors can learn more about my background, view my projects,
            and get in touch with me.
          </p>
          <ul className='flex flex-col gap-5'>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Home Page</span>
              &nbsp; : Highlights my key skills and showcases my work experience
              and projects.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>About Page</span>
              &nbsp;: Provides detailed information about my background,
              interests, and professional journey.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Project Page</span>
              &nbsp;: Displays a curated list of my projects with descriptions
              and links.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Responsive Design</span>
              &nbsp; : Ensures optimal viewing experience across a range of
              devices.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>
                Client-Side Routing
              </span>
              &nbsp;: Uses React Router for seamless navigation between
              different sections of the site.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Tailwind CSS</span>
              &nbsp;: Utilizes Tailwind CSS for modern and responsive design.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Docs;
