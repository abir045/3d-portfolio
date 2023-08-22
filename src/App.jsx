
import { About, Contact, Education, Feedbacks, Hero, Navbar, Tech, Works, Footer } from "./components"
import { BrowserRouter } from "react-router-dom"


function App() {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Education />
        <Tech />
        
      
        
           <Contact />
           <Footer />
           
        
      </div>
    </BrowserRouter>


  )
}

export default App
