import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//components
import { Navbar } from "./components/navbar/Navbar";
import Title from "./components/text/Title";
import Footer from "./components/text/Footer";
//screens
import { HomeScreen } from "./components/screens/HomeScreen";
import { EncriptionScreen } from "./components/screens/EncriptionScreen";
import { DecriptionScreen } from "./components/screens/DecritpionScreen";

function App() {
  const [loaded, setLoaded] = useState<ArrayBuffer | null>();
  const [file, setFile] = useState<File | null>(null);
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="body">
          {/* <h2 className="text h2">{`\`4!!(3=s 4+3`}</h2> */}
          <Title />
          <Switch>
            <Route path="/decryption">
              <DecriptionScreen />
            </Route>
            <Route path="/encryption">
              <EncriptionScreen file={file} loaded={loaded} />
            </Route>
            <Route path="/">
              <HomeScreen
                loaded={loaded}
                setLoaded={setLoaded}
                file={file}
                setFile={setFile}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
        {/* <p className="text caption-text">{`q'$=6'.+$=(2=-$5$1=3'$=24,=.%=3'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-='.6=6$++=3'$=(-#(5(#4 +2=6.1*=3.&$3'$1`}</p> */}
      </div>
    </Router>
  );
}

export default App;
