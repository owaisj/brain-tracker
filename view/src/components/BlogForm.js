import React, { Fragment, useState } from 'react';
import {
  Tile,
  Notification,
  Field,
  Control,
  Button,
  Textarea,
  Input,
  Help
} from 'rbx';
import { connect } from 'react-redux';
import Moment from 'moment';
import { grabPosts } from '../ducks/actions/journal';

function BlogForm(props) {
  const timestamp = Moment().format('h:mma dddd, MMMM Do YYYY');
  const [values, setValues] = useState({ title: '', body: '', timestamp });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!props.user.id) return;
    return fetch(`/api/journal/${props.user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post_title: values.title,
        post_body: values.body
      })
    })
      .then(res => res.json())
      .then(data => {
        setValues({ title: '', body: '', timestamp });
        props.grabPosts(props.user.id);
      });
  };

  return (
    <Fragment>
      <Tile as={Notification} kind="child" color="info">
        <form>
          {/* Title */}
          <Field horizontal>
            <Field.Label>Name</Field.Label>
            <Field.Body>
              <Field>
                <Control expanded>
                  <Input
                    type="text"
                    placeholder="Post Title"
                    name="title"
                    onChange={handleInputChange}
                    value={values.title}
                    disabled={!props.user.id}
                  />
                </Control>
                <Help>Timestamp: {timestamp}</Help>
              </Field>
            </Field.Body>
          </Field>
          {/* Post Body */}
          <Field horizontal>
            <Field.Label>Body</Field.Label>
            <Field.Body>
              <Field>
                <Control expanded>
                  <Textarea
                    placeholder="Your thoughts"
                    name="body"
                    onChange={handleInputChange}
                    value={values.body}
                    disabled={!props.user.id}
                  />
                </Control>
              </Field>
            </Field.Body>
          </Field>
          {/* Submit Button */}
          <Field horizontal>
            <Field.Label />
            <Field.Body>
              <Control>
                <Button
                  color="secondary"
                  onClick={handleSubmit}
                  disabled={!props.user.id}
                >
                  Submit
                </Button>
              </Control>
            </Field.Body>
          </Field>
        </form>
      </Tile>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  user: state.auth
});

const mapDispatchToProps = {
  grabPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogForm);
