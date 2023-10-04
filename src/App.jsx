import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Monsters from "./pages/Monsters";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">

      {/* add in page routing */}
      <BrowserRouter>

        <NavBar />
        <div className="container">
          {/* deploy switch to only render one */}
          <Switch>
            {/* route to pages */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />  
            </Route>
            <Route exact path='/contact'>
              <Contact />  
            </Route>
            <Route exact path="/monsters">
              <Monsters />
            </Route>
          </Switch>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
