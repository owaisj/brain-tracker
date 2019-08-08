import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

describe('Header', () => {
  test('Snapshot Renders', () => {
    const component = TestRenderer.create(
      <Router>
        <Header />
      </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Footer', () => {
  test('Snapshot Renders', () => {
    const component = TestRenderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
