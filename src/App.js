import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/home';
import About from './components/about';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  //Just used for debugging language changer
  handleClick(e) {
    e.preventDefault();
    axios
      .post('/set-language', {
        language: 'kn'
      })
      .then((resp) => {
        console.log('resp...', resp);
        if (resp && resp.status === 200) {
          window.__initialState.language = resp.data.language;
        }
      })
      .catch((err) => {
        console.log('error...', err);
      });
  }

  render() {
    const facts =
      this.props.facts &&
      this.props.facts.map((fact, i) => <li key={i}>{fact.text}</li>);

    return (
      <>
        <ul>{facts}</ul>
        <div onClick={this.handleClick}>Language changer</div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route
            path="/about"
            render={(props) => {
              return (
                <>
                  <Helmet>
                    <title>About page</title>
                  </Helmet>
                  <About {...props} />
                </>
              );
            }}
          />
          <Route
            path="/"
            render={(props) => {
              return (
                <>
                  <Helmet>
                    <title>Home page</title>
                  </Helmet>
                  <Home {...props} />
                </>
              );
            }}
          />
        </Switch>
      </>
    );
  }
}
