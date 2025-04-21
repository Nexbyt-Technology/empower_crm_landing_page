import Navbar from "./components/navbar"
import './App.css'
import Hero from "./components/Hero"
import CompanyLogo from "./components/CompanyLogo"
import FeaturesSection from "./components/FeaturesSection"
import DesignSection from "./components/DesignSection"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CompanyLogo/>
      <FeaturesSection/>
      <DesignSection/>
    </>
  )
}

export default App