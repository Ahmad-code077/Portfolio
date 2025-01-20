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
            <>
              <HeroSection />
              <SubHero />
              <WorkExp />
              <CurrentStack />
              <Projects />
            </>
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
