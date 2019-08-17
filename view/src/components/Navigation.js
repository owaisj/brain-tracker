import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'rbx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import UserPanel from './UserPanel';

const CustomNav = props => {
  const items = [
    { name: 'Journal', url: '/journal' },
    { name: 'Table', url: '/data' },
    { name: 'Graph', url: '/dashboard' },
    { name: 'Coming Soon!', url: '/' }
  ];

  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item tab as={Link} to="/" hoverable>
          <FontAwesomeIcon icon={faBrain} style={{ color: 'black' }} />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        {items.map((item, i) => (
          <Navbar.Item
            tab
            as={Link}
            key={i}
            to={item.url}
            hoverable
            style={
              item.name === 'Coming Soon!'
                ? { color: 'red', pointerEvents: 'none' }
                : {}
            }
          >
            {item.name}
          </Navbar.Item>
        ))}
        <Navbar.Item as="div" dropdown hoverable>
          <Navbar.Link arrowless>
            {props.user.name === 'Guest' ? 'Log-in' : 'Manage'}
          </Navbar.Link>
          <Navbar.Dropdown as="div" className="nav-dropdown">
            <Navbar.Item as="span">
              You are logged in as {props.user.name}
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

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(CustomNav);
