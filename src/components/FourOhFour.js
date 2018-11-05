import React, { Component } from 'react';
import HeaderLite from './HeaderLite';




class FourOhFour extends Component {
  render() {
    return (
      <section>
        <HeaderLite />

        <div className="App mh-100">
          <header className="App-header pt-2 p-5">
            <h1 className="display-3 text-white pt-5">O!!</h1>
            <h1 className="App-title text-white pt">Another Missing Person</h1>
            <p>It seems the page you are looking for doesn't yet exist or is missing too</p>
          </header>
        </div>

      </section>
    );
  }
}

export default FourOhFour;
