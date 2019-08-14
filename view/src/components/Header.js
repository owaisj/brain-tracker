import React, { Fragment } from 'react';
import { Hero, Container, Title, Navbar } from 'rbx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const CustomNav = () => {
  const items = ['Your Blog', 'Your Tracker', 'About the App', 'Sign-up`'];

  // TODO: Add an icon
  return (
    <Navbar fixed="top">
      <Navbar.Brand>
        <Link className="navbar-item is-hoverable nav-link" to="/">
          <FontAwesomeIcon icon={faBrain} />
        </Link>
      </Navbar.Brand>

      {items.map((item, i) => (
        <Link key={i} className="navbar-item is-hoverable nav-link" to="/">
          {item}
        </Link>
      ))}
    </Navbar>
  );
};

export default function Header() {
  return (
    <Fragment>
      <CustomNav />
      <Hero color="success">
        <Hero.Body>
          <Container>
            <Title>
              <Link className="title-link" to="/">
                Brain Tracker
              </Link>
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
    </Fragment>
  );
}
