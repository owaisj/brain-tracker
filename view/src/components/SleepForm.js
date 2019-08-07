import React from 'react';
import { Tile, Title, Notification, Button, Column } from 'rbx';
import { connect } from 'react-redux';
import { addSleepEntry, setVisitibilityFilter } from '../ducks/actions';

// Random data generating utilities
const randomDate = (start = new Date(2019, 6, 1), end = new Date()) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString()
    .split('T')[0];

const randomValue = () => Math.floor(Math.random() * 12) + 1;

function SleepForm(props) {
  console.log(props.visFilter);
  return (
    <Tile kind="child" as={Notification} color="primary">
      <Title>Sleep Form</Title>{' '}
      <Column.Group>
        <Column>
          <Button
            onClick={() => props.addEntry(randomDate(), randomValue())}
            disabled={props.visFilter === 'SHOW_MOOD'}
          >
            Add Entry
          </Button>
        </Column>
        <Column>
          <Button
            onClick={() => props.setChartData('SHOW_SLEEP')}
            disabled={props.visFilter === 'SHOW_SLEEP'}
          >
            View Sleep
          </Button>
        </Column>
      </Column.Group>
    </Tile>
  );
}

const mapStateToProps = state => ({
  visFilter: state.visFilter
});

const mapDispatchToProps = dispatch => ({
  addEntry: (d, v) => dispatch(addSleepEntry(d, v)),
  setChartData: f => dispatch(setVisitibilityFilter(f))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SleepForm);
