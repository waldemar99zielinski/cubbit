import React from "react";

import "./App.css";

import { Navbar } from "./components/navbar/Navbar";
import { DropZone } from "./components/dropzone/DropZone";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="body">
        <DropZone />
      </div>
    </div>
  );
}

export default App;
