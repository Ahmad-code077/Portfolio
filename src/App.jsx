import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import CurrentStack from './Components/CurrentStack';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import SubHero from './Components/SubHero';
import WorkExp from './Components/WorkExp';
import NoPage from './Path/NoPage';
import Loading from './Components/Loading';

// Lazy load the About and ProjectLink components
const About = lazy(() => import('./Path/About'));
const ProjectLink = lazy(() => import('./Path/ProjectLink'));

const App = () => {
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
            <Route path='*' element={<NoPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
