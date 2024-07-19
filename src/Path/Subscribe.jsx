const Subscribe = () => {
  return (
    <main
      className='max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] mx-auto mt-24'
      data-aos='fade-right'
    >
      <section className='flex flex-col gap-6 '>
        <div className='flex items-start justify-start flex-col gap-2'>
          <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>
            Subscribe
          </h1>
          <p className='text-gray-300 leading-7'>
            Welcome to the Subscribe page! Stay updated with the latest news,
            projects, and exclusive content by subscribing to my newsletter. By
            joining the mailing list, you'll be the first to know about new
            developments and receive valuable insights directly to your inbox.
          </p>
        </div>
        <div className='flex items-start justify-start flex-col gap-5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-4xl'>
            Benefits of Subscribing
          </h1>

          <ul className='flex flex-col gap-5'>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Exclusive Updates</span>
              &nbsp; :Receive notifications about new projects, blog posts, and
              important announcements.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>
                Behind-the-Scenes Content
              </span>
              &nbsp;: Get a glimpse of the creative process and
              behind-the-scenes content.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Tips and Resources</span>
              &nbsp;: Access valuable tips, tutorials, and resources to help you
              in your own projects.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Special Offers</span>
              &nbsp;: Be the first to know about any special offers,
              collaborations, or events.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Subscribe;
