const Analytics = () => {
  return (
    <main className='max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]  mx-auto mt-24'>
      <section className='flex flex-col gap-6 '>
        <div className='flex items-start justify-start flex-col gap-2'>
          <h1 className='text-3xl font-bold tracking-tight md:text-5xl '>
            Analytics
          </h1>
          <p className='text-gray-300 leading-7'>
            Welcome to the Analytics page. This section provides insights into
            the performance of the site, user behavior, and other key metrics.
            Understanding these analytics helps improve the user experience and
            optimize the site's functionality.
          </p>
        </div>
        <div className='flex items-start justify-start flex-col gap-5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-4xl'>
            Overview
          </h1>
          <p className='text-gray-300 leading-7'>
            By analyzing these metrics, I can identify trends, understand user
            engagement, and make data-driven decisions to enhance the user
            experience and optimize the site's functionality. Whether it's
            tracking the most visited pages, understanding visitor demographics,
            or monitoring site performance, this Analytics page serves as a
            vital tool in continually improving and tailoring my portfolio to
            meet the needs of its audience.
          </p>
        </div>
      </section>
    </main>
  );
};
export default Analytics;
