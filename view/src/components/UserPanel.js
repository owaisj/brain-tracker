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
import { loginUser } from '../ducks/actions';

const LoginForm = props => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleUserChange = e => {
    setName(e.target.value);
  };

  const handlePassChange = e => {
    setPass(e.target.value);
  };

  return (
    <Fragment>
      <Field>
        <Control>
          <Input
            type="text"
            placeholder="Your Email Address"
            name="name"
            value={name}
            onChange={handleUserChange}
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input
            type="password"
            placeholder="Password"
            name="pass"
            value={pass}
            onChange={handlePassChange}
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Button
            onClick={() => {
              setName('');
              setPass('');
              return props.login(name, pass);
            }}
          >
            Login
          </Button>
        </Control>
      </Field>
    </Fragment>
  );
};

function UserPanel(props) {
  return (
    <Tile kind="child" as={Notification} color="warning">
      <Title>Welcome {props.user.name}</Title>
      <Column.Group>
        <Column>
          {props.user.name !== 'Guest' ? (
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
    userLogin: (name, pass) => {
      dispatch(loginUser(name, pass));
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
