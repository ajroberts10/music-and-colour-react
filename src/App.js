import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Live from './pages/Live';
import Demos from './pages/Demos';
import Contact from './pages/Contact';

const client = new ApolloClient({
  uri: 'https://music-apollo-server.herokuapp.com/'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/live" component={Live} />
            <Route path="/demos" component={Demos} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
