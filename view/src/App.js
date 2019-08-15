import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        {/* NOTE: This is a custom footer, not the same as rbx Footer */}
        <Footer />
      </Router>
    </Fragment>
  );
}
