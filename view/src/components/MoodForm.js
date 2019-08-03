import React from 'react';
import { Tile, Title, Notification, Button, Column } from 'rbx';
import { connect } from 'react-redux';
import { addMoodEntry, setVisitibilityFilter } from '../ducks/actions/';

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
      <Column.Group>
        <Column>
          <Button
            onClick={() => props.addEntry(randomDate(), randomValue())}
            disabled={props.visFilter !== 'SHOW_MOOD'}
          >
            Add Entry
          </Button>
        </Column>
        <Column>
          <Button onClick={() => props.setChartData('SHOW_MOOD')}>
            View Mood
          </Button>
        </Column>
      </Column.Group>
    </Tile>
  );
}

const mapDispatchToProps = dispatch => ({
  // props.addEntry(date, value)
  addEntry: (d, v) => dispatch(addMoodEntry(d, v)),
  setChartData: f => dispatch(setVisitibilityFilter(f))
});

const mapStateToProps = state => ({
  visFilter: state.visFilter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoodForm);
