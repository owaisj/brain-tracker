import React from 'react';
import { Tile, Title, Notification, Dropdown, Button } from 'rbx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <Tile kind="parent" vertical>
      <Tile kind="child" as={Notification} color="danger">
        <Title>Hello {props.user.name}</Title>
        <Dropdown hoverable>
          <Dropdown.Trigger>
            <Button>Navigation</Button>
          </Dropdown.Trigger>

          <Dropdown.Menu>
            <Dropdown.Content>
              <Dropdown.Item as="div">
                <Link to="/dashboard">View Dashboard</Link>
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Link to="/">Sign-up</Link>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Menu>
        </Dropdown>
      </Tile>
    </Tile>
  );
}

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(Navigation);
