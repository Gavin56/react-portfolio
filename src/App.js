import "./App.css";
import React from "react";
// import Header from "./components/Header/index";
// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";
// import projects from "./utils/JSON";
// import Particles from "react-tsparticles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        {/* <Header projects={projects}></Header> */}
      </div>
    </Router>
  );
}

export default App;
