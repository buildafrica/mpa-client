import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from  'react-router-dom';
import About from './components/About';
import Archive from './components/Archive';
import Login from './components/Login';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <Header/>
       



          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/archive" component={Archive} />
        </section>
      </Router>
    );
  }
}

export default App;


