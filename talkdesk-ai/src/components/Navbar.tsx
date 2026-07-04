import { useState } from "react";
import "./components/Navbar.css";

function Navbar(){
   const [isOpen, setIsOpen] = useState(false);
     return(
         <>
        <div className="navbar">
        <div className="logotxt">
        <h1>TalkdeskAI</h1>
          </div>2
    <div className="handburger">
       <div className="nav-links">
           <a href="/">Home</a>
           <a href="/">Features</a>
           <a href="/">Pricing </a>
           <a href="/">Contact</a>
            </div>
        <button className="hand-icon" onClick={() => setIsOpen(!isOpen)} > ☰ </button>
           {isOpen && (                
     <div className="mobile-menu">
         <a href="/">Features</a>
         <a href="/">Pricing</a>
         <a href="/">Contact</a>
        <button className="CTA">
         Get Started For Free
        </button>
    </div>
             )}
            </div>
            </div>
                </>
                    )
                      }
  export default Navbar;