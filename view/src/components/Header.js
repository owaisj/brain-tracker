import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Hero, Container, Title, Navbar } from 'rbx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

import UserPanel from './UserPanel';

const CustomNav = props => {
  const items = [
    { name: 'Journal', url: '/blog' },
    { name: 'Table', url: '/data' },
    { name: 'Graph', url: '/dashboard' },
    { name: 'Resources', url: '/' }
  ];

  return (
    <Navbar color="success">
      <Navbar.Brand>
        <Navbar.Item as={Link} to="/" hoverable>
          <FontAwesomeIcon icon={faBrain} />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        {items.map((item, i) => (
          <Navbar.Item as={Link} key={i} to={item.url} hoverable>
            {item.name}
          </Navbar.Item>
        ))}
        <Navbar.Item as="div" dropdown hoverable>
          <Navbar.Link>Log-in</Navbar.Link>
          <Navbar.Dropdown as="div" className="nav-dropdown">
            <Navbar.Item as="span" style={{ color: 'black' }}>
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
