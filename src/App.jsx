import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas, Footer, InnovationLab, Freelance } from "./components";
import Explore from "./components/Explore";

const Portfolio = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-black'>
      <StarsCanvas />

      <div className='relative z-10'>
        <div className='relative'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <InnovationLab />
        <Tech />
        <Freelance />
        <div className='relative z-0'>
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
