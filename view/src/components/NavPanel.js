import React from 'react';
import { Tile, Title, Notification } from 'rbx';
import { connect } from 'react-redux';

function Navigation(props) {
  return (
    <Tile kind="parent" vertical size={4}>
      <Tile kind="child" as={Notification} color="primary">
        <Title>Hello {props.user.name}</Title>
      </Tile>
    </Tile>
  );
}

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(Navigation);
