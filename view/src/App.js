import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import Main from './pages/Main';
import Data from './pages/DataPage';
import CatchAll from './pages/404';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/journal" component={Blog} />
          <Route exact path="/data" component={Data} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={CatchAll} />
        </Switch>
        {/* NOTE: This is a custom footer, not the same as rbx Footer */}
        <Footer />
      </Router>
    </Fragment>
  );
}
