import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import AboutMe from "./components/aboutme/aboutme"
import Portfolio from "./components/portfolio/portfolio"
import Contact from "./components/contact/contact"

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Header2 /> */}
        <div className="wrapper">
          <div className="box1">
            <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/" component={AboutMe} />
              
              {/* <Route exact path="/contact" component={Contact} /> */}
            </Switch>

          </div>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
