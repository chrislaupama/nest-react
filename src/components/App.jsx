import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import FloatingButton from "./FloatingButton/FloatingButton";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Header} />
          <Route path="/" exact component={Main} />
          <Route path="/" exact component={Footer} />
          <Route path="/" exact component={FloatingButton} />
        </div>
      </Router>
    );
  }
}
