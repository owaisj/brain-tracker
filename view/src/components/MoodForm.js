import React, { useState, Fragment } from 'react';
import { Title, Button, Column, Dropdown } from 'rbx';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  addMoodEntry,
  setVisitibilityFilter,
  getMoods
} from '../ducks/actions/';

function MoodForm(props) {
  const [moodValue, setMoodValue] = useState(null);
  const [date, setDate] = useState(new Date());
  if (props.user.name !== 'Guest') {
    // TODO: excludeDates and excludeTimes
    return (
      <Fragment>
        <Title subtitle>Mood Form</Title>

        <Column.Group>
          <Column>
            <DatePicker
              className="input"
              selected={date}
              onChange={d => setDate(d)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="Time"
            />
          </Column>
          {/* </Column.Group>
        <Column.Group> */}
          <Column>
            <Dropdown>
              <Dropdown.Trigger>
                <Button>Mood: {moodValue ? moodValue : '???'}</Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Content>
                  {Array(10)
                    .fill(null)
                    .map((item, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          onClick={() => {
                            setMoodValue(index + 1);
                            console.log(moodValue);
                          }}
                        >
                          {index + 1}
                        </Dropdown.Item>
                      );
                    })}
                </Dropdown.Content>
              </Dropdown.Menu>
            </Dropdown>
          </Column>
        </Column.Group>

        <Column.Group centered>
          <Column narrow>
            <Button
              onClick={() => {
                // These are in place of API calls
                if (!moodValue) return console.log(`Enter a mood for ${date}`);

                fetch(`/api/mood/${props.user.id}`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    mood_value: moodValue.toString()
                  })
                })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data);
                    // Reset State
                    setDate(new Date());
                    setMoodValue(null);
                    props.grabMoodData(props.user.id);
                  });
              }}
            >
              Submit
            </Button>
          </Column>
          <Column narrow>
            <Button
              onClick={() => props.setChartData('SHOW_MOOD')}
              disabled={props.visFilter === 'SHOW_MOOD'}
            >
              View Mood
            </Button>
          </Column>
        </Column.Group>
      </Fragment>
    );
  }

  // Dummy Data Functions and Component
  const randomDate = (start = new Date(2019, 6, 1), end = new Date()) =>
    new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
      .toISOString()
      .split('T')[0];
  const randomValue = () => Math.floor(Math.random() * 10) + 1;
  return (
    <Fragment>
      <Title subtitle>Mood Form</Title>
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
          <Button
            onClick={() => props.setChartData('SHOW_MOOD')}
            disabled={props.visFilter === 'SHOW_MOOD'}
          >
            View Mood
          </Button>
        </Column>
      </Column.Group>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  // props.addEntry(date, value)
  addEntry: (d, v) => dispatch(addMoodEntry(d, v)),
  setChartData: f => dispatch(setVisitibilityFilter(f)),
  grabMoodData: v => dispatch(getMoods(v))
});

const mapStateToProps = state => ({
  visFilter: state.visFilter,
  user: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoodForm);
