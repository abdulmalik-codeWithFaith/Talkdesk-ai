import "./App.css";
import Navbar from "./components/Navbar" ;
import Hero from "./components/Hero";
import Features from "./components/features";
import Work from "./components/Work";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import Copy from "./components/copyright";
function App() {
  return(
      <>
    <Navbar />
    <Hero />
    <Features />
    <Work />
    <Pricing />
    <Footer />
    <Copy />
      </>
        )
          }

export default App;