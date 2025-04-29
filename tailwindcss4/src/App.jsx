import Navbar from "./components/navbar"
import './App.css'
import Hero from "./components/Hero"
import CompanyLogo from "./components/CompanyLogo"
import FeaturesSection from "./components/FeaturesSection"
import DesignSection from "./components/DesignSection"
import About from "./components/about"
import TryNow from "./components/TryNow"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CompanyLogo/>
      <FeaturesSection/>
      <DesignSection/>
      <About/>
      <TryNow/>
      <Footer/>
    </>
  )
}

export default App