import './App.css';
import React, {useEffect} from "react"
import Header from "./components/Header/index"
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import projects from "./utils/JSON"

function App() {
  return (
    <Header projects={projects}></Header>
  );
}

export default App;
