import React, { useState } from 'react';
import { Tile, Title, Notification, Button, Column, Dropdown } from 'rbx';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { addMoodEntry, setVisitibilityFilter } from '../ducks/actions/';

function MoodForm(props) {
  const [moodValue, setMoodValue] = useState(null);
  const [date, setDate] = useState(new Date());
  console.log(props);
  if (props.user.name !== 'Guest') {
    // TODO: POST to User Table
    // TODO: Change Models for better datetime
    // TODO: excludeDates and excludeTimes
    return (
      <Tile kind="child" as={Notification} color="primary">
        <Title>Mood Form</Title>

        <Column.Group>
          <Column>
            <DatePicker
              selected={date}
              onChange={d => setDate(d)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="Time"
            />
          </Column>
          <Column>
            <Dropdown>
              <Dropdown.Trigger>
                <Button>
                  Mood Value: {moodValue ? moodValue : 'Pick a number'}
                </Button>
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
        <Column.Group>
          <Button
            onClick={() => {
              // These are in place of API calls
              if (!moodValue) return console.log(`Enter a mood for ${date}`);
              console.log(`Date: ${date} Mood Value: ${moodValue}`);
              // Reset State
              setDate(new Date());
              setMoodValue(null);
            }}
          >
            Submit
          </Button>
        </Column.Group>
      </Tile>
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
          <Button
            onClick={() => props.setChartData('SHOW_MOOD')}
            disabled={props.visFilter === 'SHOW_MOOD'}
          >
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
  visFilter: state.visFilter,
  user: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoodForm);
