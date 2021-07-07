import React from "react";

import "./App.css";

//components
import { Navbar } from "./components/navbar/Navbar";
import { DropZone } from "./components/dropzone/DropZone";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="body">
        <DropZone />
        <Button
          style="button-standard"
          title="Busssssssssstton"
          onClick={() => console.log("XD")}
        ></Button>
        <Input />
      </div>
    </div>
  );
}

export default App;
