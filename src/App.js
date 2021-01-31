import "./App.css";
import React from "react";
// import Header from "./components/Header/index";
// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";
// import projects from "./utils/JSON";
// import Particles from "react-tsparticles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={About}/>
        {/* <Header projects={projects}></Header> */}
      </div>
    </Router>
  );
}

export default App;
