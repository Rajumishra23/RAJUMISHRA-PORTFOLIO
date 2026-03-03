import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Information from './components/Infromation'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Testimonials from './components/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar/> 
      
      <Hero/>
      <About/>
      <Information/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>

  )
}

export default App;
