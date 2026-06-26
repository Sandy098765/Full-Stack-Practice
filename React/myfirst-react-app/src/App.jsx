//functional compenent
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Homeclass from "./Classcomponents/Homeclass";
import Aboutclass from "./Classcomponents/Aboutclass";
import Contactclass from "./Classcomponents/Contactclass";
import Greeting from "./Greeting";

function App() {
  let name = "Deia";
  let age = 21;
  let year = "4th year";
  return (
    <div>
        <h1>Hello Everyone welcome to react</h1>
        <h5>Bye, thank you for today</h5>
        <Home />
        <Homeclass />
        <About />
        <Aboutclass />
        <Contact />
        <Contactclass />
        <Greeting fn={name} age={age} year={year} favcolor = "Lavender"/>
    </div>
    
  );
}

export default App;