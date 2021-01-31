import "./App.css";
import React from "react";
// import projects from "./utils/JSON";
import Particle from "./components/Particles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particle />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >

          {/* You can render <Route> and <NavTabs /> here */}
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </div>
    </Router>
  );
}

export default App;
