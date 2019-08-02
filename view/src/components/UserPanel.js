import React from 'react';
import { connect } from 'react-redux';
import { Tile, Title, Notification, Button, Column } from 'rbx';

function UserPanel(props) {
  console.log(props);
  return (
    <Tile kind="child" as={Notification} color="warning">
      <Title>Welcome {props.user}</Title>
      <Column.Group>
        <Column>
          <Button onClick={() => props.userLogin()}>Login</Button>
        </Column>
        <Column>
          <Button
            onClick={() => {
              props.userLogout();
            }}
          >
            Logout
          </Button>
        </Column>
      </Column.Group>
    </Tile>
  );
}

const mapStateToProps = state => {
  return {
    // props.user is the initial state in the authReducer
    user: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userLogin: () => {
      dispatch({ type: 'USER_LOGIN' });
    },
    userLogout: () => {
      dispatch({ type: 'USER_LOGOUT' });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPanel);
