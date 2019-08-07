import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import CustomFooter from './components/Footer';
import Main from './pages/Main';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/dashboard" component={Main} />
        </Switch>
        <CustomFooter />
      </Router>
    </Fragment>
  );
}
