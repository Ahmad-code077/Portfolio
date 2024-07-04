import { FaLightbulb } from 'react-icons/fa';
const NoPage = () => {
  return (
    <section className=''>
      <div className='flex items-center justify-center my-48 flex-col font-poppins gap-4'>
        <FaLightbulb className='text-7xl animate-pulse text-yellow-300' />
        <h1 className='text-3xl md:text-5xl tracking-wide font-bold'>
          404 Not found
        </h1>
      </div>
    </section>
  );
};
export default NoPage;
