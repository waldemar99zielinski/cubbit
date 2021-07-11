import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

//components
import { Navbar } from "./components/navbar/Navbar";

//screens
import { HomeScreen } from "./components/screens/HomeScreen";
import { EncriptionScreen } from "./components/screens/EncriptionScreen";
import { DecriptionScreen } from "./components/screens/DecritpionScreen";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="body">
          <h2 className="text h2">{`\`4!!(3=s 4+3`}</h2>

          <Switch>
            <Route path="/decryption">
              <DecriptionScreen />
            </Route>
            <Route path="/encryption">
              <EncriptionScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
        <p className="text caption-text">{`q'$=6'.+$=(2=-$5$1=3'$=24,=.%=3'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-='.6=6$++=3'$=(-#(5(#4 +2=6.1*=3.&$3'$1`}</p>
      </div>
    </Router>
  );
}

export default App;
