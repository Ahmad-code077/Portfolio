// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import React, { lazy, Suspense, useEffect } from 'react';
// import {
//   CurrentStack,
//   Footer,
//   HeroSection,
//   Navbar,
//   Projects,
//   SubHero,
//   WorkExp,
//   Loading,
// } from './Components';
// import NoPage from './Path/NoPage';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const About = lazy(() => import('./Path/About'));
// const ProjectLink = lazy(() => import('./Path/ProjectLink'));

// const Docs = lazy(() => import('./Path/Docs'));
// const Analytics = lazy(() => import('./Path/Analytics'));
// const Statistics = lazy(() => import('./Path/Statistics'));
// const Guestbook = lazy(() => import('./Path/Guestbook'));
// const Subscribe = lazy(() => import('./Path/Subscribe'));

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 120,
//       duration: 900,

//       mirror: false, // whether elements should animate out while scrolling past them
//     });
//   }, []);
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Suspense fallback={<Loading />}>
//           <Routes>
//             <Route
//               exact
//               path='/'
//               element={
//                 <>
//                   <div className='max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[70vw] 2xl:max-w-[46vw] mx-auto'>
//                     <HeroSection />
//                     <SubHero />
//                     <WorkExp />
//                     <CurrentStack />
//                     <Projects />
//                   </div>
//                 </>
//               }
//             />
//             <Route path='/about' element={<About />} />
//             <Route path='/project' element={<ProjectLink />} />
//             <Route path='/docs' element={<Docs />} />
//             <Route path='/analytics' element={<Analytics />} />
//             <Route path='/statistics' element={<Statistics />} />
//             <Route path='/guestbook' element={<Guestbook />} />
//             <Route path='/subscribe' element={<Subscribe />} />
//             <Route path='*' element={<NoPage />} />
//           </Routes>
//         </Suspense>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

import React, { lazy, Suspense, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  CurrentStack,
  HeroSection,
  Projects,
  SubHero,
  WorkExp,
  Loading,
  Layout,
} from './Components';
import NoPage from './Path/NoPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = lazy(() => import('./Path/About'));
const ProjectLink = lazy(() => import('./Path/ProjectLink'));
const Docs = lazy(() => import('./Path/Docs'));
const Analytics = lazy(() => import('./Path/Analytics'));
const Statistics = lazy(() => import('./Path/Statistics'));
const Guestbook = lazy(() => import('./Path/Guestbook'));
const Subscribe = lazy(() => import('./Path/Subscribe'));

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 900,
      mirror: false,
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NoPage />,
      children: [
        {
          index: true,
          element: (
            <div className='max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[70vw] 2xl:max-w-[46vw] mx-auto'>
              <HeroSection />
              <SubHero />
              <WorkExp />
              <CurrentStack />
              <Projects />
            </div>
          ),
        },
        {
          path: '/about',
          element: (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: '/project',
          element: (
            <Suspense fallback={<Loading />}>
              <ProjectLink />
            </Suspense>
          ),
        },
        {
          path: '/docs',
          element: (
            <Suspense fallback={<Loading />}>
              <Docs />
            </Suspense>
          ),
        },
        {
          path: '/analytics',
          element: (
            <Suspense fallback={<Loading />}>
              <Analytics />
            </Suspense>
          ),
        },
        {
          path: '/statistics',
          element: (
            <Suspense fallback={<Loading />}>
              <Statistics />
            </Suspense>
          ),
        },
        {
          path: '/guestbook',
          element: (
            <Suspense fallback={<Loading />}>
              <Guestbook />
            </Suspense>
          ),
        },

        {
          path: '/subscribe',
          element: (
            <Suspense fallback={<Loading />}>
              <Subscribe />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
