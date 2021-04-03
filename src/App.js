import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
import './App.css';
//Import Pages
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/login/:id">
            <MovieDetail />
          </Route>
          <Route path="/sign">
            <Signin />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
