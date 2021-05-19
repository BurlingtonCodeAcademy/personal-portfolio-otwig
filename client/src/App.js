//imports for React and React Router and components for use below
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
import Footer from "./pages/Footer";
import DiceProjects from './components/DiceProjects';
import CodingProjects from './components/CodingProjects';
import PotteryProjects from './components/PotteryProjects';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//this component holds both visual parts of the top of the site (the burger menu button and social media buttons) 
//as well as the functional parts for React Router to allow other components to be rendered to the page (everything within the <Switch> tag below)
function App() {

  return (
    <Router>
      <div className="App">
        <div id="top">
          {/* <Burger /> */}
          {/* <SocialsTop /> */}
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
