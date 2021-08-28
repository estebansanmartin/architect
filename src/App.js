import React, { useState, useEffect } from 'react';
import './index.css';
import "rbx/index.css";
import { BrowserRouter as Router,
  Switch, 
  Route } from "react-router-dom"
import { spring, AnimatedSwitch } from 'react-router-transition'
import Nav from './components/Navbar'
import Home from './components/Home'
import Progetti from './components/Progetti'
import Studio from './components/Studio'
import Servizi from './components/Servizi'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import { CircularProgress } from '@material-ui/core';

/* function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
} */

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <div>
    {loading === false ? (
      <div className="app">
      <Router>
        <Nav />
        <Switch>
  
      {/* <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="route-wrapper"
      > */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/studio">
            <Studio />
          </Route>
          <Route path="/progetti">
            <Progetti />
          </Route>
          <Route path="/servizi">
            <Servizi />
          </Route>
          <Route path="/contatti">
            <Contacto />
          </Route>
          {/*</AnimatedSwitch>*/}
        </Switch>
        <Footer />
          
        </Router>
      
      </div>
    ) : (
      <div className="loading-fondo">
        <CircularProgress className="loading-icon" color="secondary" />
      </div>
    )}
    </div>
  );
}

export default App;
