const Guestbook = () => {
  return (
    <main className='max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]  mx-auto mt-24'>
      <section className='flex flex-col gap-6 '>
        <div className='flex items-start justify-start flex-col gap-2'>
          <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>
            Guestbook
          </h1>
          <p className='text-gray-300 leading-7'>
            Welcome to the GuestBook page! I appreciate you taking the time to
            visit my portfolio. Here, you can leave your thoughts, feedback, and
            comments. Your insights and suggestions are valuable to me and help
            in improving my work and this site. Feel free to share your
            experiences, suggestions, or just say hello!. You will find my
            contacts on footer
          </p>
        </div>
        <div className='flex items-start justify-start flex-col gap-5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-4xl'>
            Recent Entries
          </h1>
          <p className='text-gray-300 leading-7'>
            Here are some of the recent entries from visitors like you. Thank
            you for your kind words and constructive feedback.
          </p>
          <ul className='flex flex-col gap-5'>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Tulaib Yaseen</span>
              &nbsp; : Great portfolio! I love the clean design and the detailed
              project descriptions.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Hamid Mehmood</span>
              &nbsp;: Your projects are impressive. Keep up the good work!.
            </li>
            <li className='text-gray-300 leading-7'>
              <span className='text-[#7127ba] text-xl'>Tanveer Ahmad</span>
              &nbsp;: The site is very user-friendly. I found it easy to
              navigate and informative.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Guestbook;
