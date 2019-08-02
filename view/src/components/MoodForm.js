import React from 'react';
import { Tile, Title, Notification, Button } from 'rbx';
import { connect } from 'react-redux';
import { addMoodEntry } from '../ducks/actions/moodActions';

// Generate a random date
const randomDate = (start = new Date(2019, 6, 1), end = new Date()) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString()
    .split('T')[0];

// July Month Index is 6

// Generate a random value
const randomValue = () => Math.floor(Math.random() * 10) + 1;

function MoodForm(props) {
  return (
    <Tile kind="child" as={Notification} color="primary">
      <Title>Mood Form</Title>
      <Button onClick={() => props.addEntry(randomDate(), randomValue())}>
        Add Entry
      </Button>
    </Tile>
  );
}

const mapDispatchToProps = dispatch => ({
  // props.addEntry(date, value)
  addEntry: (d, v) => dispatch(addMoodEntry(d, v))
});

export default connect(
  undefined,
  mapDispatchToProps
)(MoodForm);
