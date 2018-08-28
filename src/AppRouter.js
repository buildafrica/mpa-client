import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import About from './components/About';
import Archive from './components/Archive';
import Login from './components/Login';
import Home from './components/Home';
import FourOhFour from './components/FourOhFour';


class App extends Component {
  render() {
    return (
      <Router>
        <section>
          {/* <Header/>
        */}

        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/archive" component={Archive} />
          <Route path="/login" component={Login} />
          <Route component={FourOhFour} />
        </Switch>
        </section>
      </Router>
    );
  }
}

export default App;


