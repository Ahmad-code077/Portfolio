import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CurrentStack from './Components/CurrentStack';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import SubHero from './Components/SubHero';
import WorkExp from './Components/WorkExp';
import NoPage from './Path/NoPage';
import About from './Path/About';
import ProjectLink from './Path/ProjectLink';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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

        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
