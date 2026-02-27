import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Achievements, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative'>
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 via-black/0  pointer-events-none' aria-hidden />
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Chatbot /> */}
        <Experience />
        <Tech />
        {/* <Works /> */}
        {/* <GitHubActivity /> */}
        {/* <Feedbacks /> */}
        {/* <Achievements /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;