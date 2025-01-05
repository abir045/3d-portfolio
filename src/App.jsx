import {
  About,
  Contact,
  Education,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";
import { BrowserRouter } from "react-router-dom";
import Experience from "./components/Experience";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-secondary">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Education />
        <Tech />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
