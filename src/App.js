import "./App.css";
import React from "react";
// import projects from "./utils/JSON";
// import Particles from "react-tsparticles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/portfolio" component={Portfolio}/>
      </div>
    </Router>
  );
}

export default App;
