import { BrowserRouter } from "react-router-dom";
import GitHubActivity from "./components/GitHubActivity";
import Chatbot from "./components/Chat";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Achievements } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Chatbot />
        <Experience />
        <Tech />
        <Works />
        <GitHubActivity />
        <Feedbacks />
        <Achievements />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
