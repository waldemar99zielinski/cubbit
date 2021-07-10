import React from "react";

import "./App.css";

//components
import { Navbar } from "./components/navbar/Navbar";
import { DropZone } from "./components/dropzone/DropZone";
import { Button } from "./components/button/Button";
import { Input } from "./components/textInput/Input";
import { InputWithCopy } from "./components/textInput/InputWithCopy";
import { LoadingAnimation } from "./components/loadingAnimation/LoadingAnimation";
//screens
import { HomeScreen } from "./components/screens/HomeScreen";
import { EncriptionScreen } from "./components/screens/EncriptionScreen";
import { DecriptionScreen } from "./components/screens/DecritpionScreen";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="body">
        <h2 className="text h2">{`\`4!!(3=s 4+3`}</h2>

        <HomeScreen />
        {/* <EncriptionScreen /> */}
        {/* <DecriptionScreen /> */}
      </div>
      <p className="text caption-text">{`q'$=6'.+$=(2=-$5$1=3'$=24,=.%=3'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-='.6=6$++=3'$=(-#(5(#4 +2=6.1*=3.&$3'$1`}</p>
    </div>
  );
}

export default App;
