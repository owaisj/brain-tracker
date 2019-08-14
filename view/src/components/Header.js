import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Hero, Container, Title, Navbar } from 'rbx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

import UserPanel from './UserPanel';

const CustomNav = props => {
  const items = [
    { name: 'Your Blog', url: '/' },
    { name: 'Your Tracker', url: '/dashboard' }
  ];

  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item as="div">
          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faBrain} />
          </Link>
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        {items.map((item, i) => (
          <Navbar.Item as="div" key={i}>
            <Link className="nav-link" to={item.url}>
              {item.name}
            </Link>
          </Navbar.Item>
        ))}
        <Navbar.Item as="div" dropdown hoverable>
          <Navbar.Link arrowless>Log-in</Navbar.Link>
          <Navbar.Dropdown as="div" className="nav-dropdown">
            <Navbar.Item as="span">
              You are logged in as {props.name}
            </Navbar.Item>
            <Navbar.Divider />
            <Navbar.Item as="div">
              <UserPanel />
            </Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar.Menu>
    </Navbar>
  );
};

function Header(props) {
  return (
    <Fragment>
      <CustomNav name={props.user.name} />
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

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(Header);
