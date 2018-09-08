import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import About from './components/About';
import Archive from './components/Archive';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
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
          <Route path="/signup" component={Signup} />
          <Route path="/resetpass" component={ResetPassword} />
          <Route component={FourOhFour} />
        </Switch>
        </section>
      </Router>
    );
  }
}

export default App;


