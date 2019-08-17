import React from 'react';
import { Tile, Title, Notification, Content } from 'rbx';
import { connect } from 'react-redux';

function Sidebar(props) {
  return (
    <Tile kind="parent" vertical size={4}>
      <Tile
        kind="child"
        as={Notification}
        color="primary"
        style={{ border: '2px solid white' }}
      >
        <Title>{props.title}</Title>
        <Content>{props.description}</Content>
        {props.children}
      </Tile>
    </Tile>
  );
}

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(Sidebar);
