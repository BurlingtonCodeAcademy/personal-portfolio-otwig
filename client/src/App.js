import React from 'react';
import './App.css';
import SocialsTop from './components/SocialsTop';
import Burger from './components/Burger'
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Hobbies from "./pages/Hobbies";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Footer from "./pages/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DiceProjects from './components/DiceProjects';
import CodingProjects from './components/CodingProjects';
import PotteryProjects from './components/PotteryProjects';


function App() {

  return (
    <Router>
      <div className="App">
        <div id="top">
          <Burger />
          <SocialsTop />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Hobbies" component={Hobbies} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Work" component={Work} />
          
                    <Route path="/components/CodingProjects" component={CodingProjects} />
                    <Route path="/components/PotteryProjects" component={PotteryProjects} />
                    <Route path="/components/DiceProjects" component={DiceProjects} />
                
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
