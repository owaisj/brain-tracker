import React, { Fragment } from 'react';
import Header from './components/Header';
import CustomFooter from './components/Footer';
import Main from './pages/Main';

export default function App() {
  return (
    <Fragment>
      {/* TODO: Refactor to a header component */}
      <Header />
      <Main />
      <CustomFooter />
    </Fragment>
  );
}
