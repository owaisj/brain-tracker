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
import Moment from 'moment';

export default function BlogForm(props) {
  const timestamp = Moment().format('h:mma dddd, MMMM Do YYYY');
  const [values, setValues] = useState({ title: '', body: '', timestamp });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    console.log('You clicked submit');
    setValues({ title: '', body: '', timestamp });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // TODO: Disabled prop based on login status
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
                <Button color="secondary" onClick={handleSubmit}>
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
