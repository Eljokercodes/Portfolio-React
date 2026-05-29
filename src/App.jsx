import Home from "./components/home/Home"
import About from "./components/about/About"
import Contacts from "./components/contacts/Contacts"
import Projects from "./components/projects/Projects"
import Services from "./components/services/Services"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import TheSkills from "./components/theskills/TheSkills"

function App() {
  

  return (
    <>
      <Home/>
      <Nav/>
      <About/>
      <TheSkills/>
      <Services/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
