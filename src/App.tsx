import React from "react";

import "./App.css";

//components
import { Navbar } from "./components/navbar/Navbar";
import { DropZone } from "./components/dropzone/DropZone";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { InputWithCopy } from "./components/input/InputWithCopy";
import { LoadingAnimation } from "./components/loadingAnimation/LoadingAnimation";
//screens
import { HomeScreen } from "./components/screens/HomeScreen";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="body">
        <HomeScreen />
      </div>
      <caption className="text caption-text">{`q'$=6'.+$=(2=-$5$1=3'$=24,=.%=3'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-='.6=6$++=3'$=(-#(5(#4 +2=6.1*=3.&$3'$1`}</caption>
    </div>
  );
}

export default App;
