import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {
  Tile,
  Title,
  Notification,
  Button,
  Column,
  Field,
  Control,
  Input
} from 'rbx';

const LoginForm = props => {
  const [value, setValue] = useState({});

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <Fragment>
      <Field>
        <Control>
          <Input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={handleInputChange}
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Button onClick={() => props.login(value)}>Login</Button>
        </Control>
      </Field>
    </Fragment>
  );
};

function UserPanel(props) {
  return (
    <Tile kind="child" as={Notification} color="warning">
      <Title>Welcome {props.user}</Title>
      <Column.Group>
        <Column>
          {props.user !== 'Guest' ? (
            <Button
              onClick={() => {
                props.userLogout();
              }}
            >
              Logout
            </Button>
          ) : (
            <LoginForm login={props.userLogin} />
          )}
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
    userLogin: name => {
      dispatch({ type: 'USER_LOGIN', name });
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
