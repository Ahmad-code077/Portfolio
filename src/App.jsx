import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import CurrentStack from './Components/CurrentStack';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import SubHero from './Components/SubHero';
import WorkExp from './Components/WorkExp';
import NoPage from './Path/NoPage';
import Loading from './Components/Loading';
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

      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <HeroSection />
                  <SubHero />
                  <WorkExp />
                  <CurrentStack />
                  <Projects />
                </>
              }
            />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<ProjectLink />} />
            <Route path='/docs' element={<Docs />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/statistics' element={<Statistics />} />
            <Route path='/guestbook' element={<Guestbook />} />
            <Route path='/subscribe' element={<Subscribe />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
