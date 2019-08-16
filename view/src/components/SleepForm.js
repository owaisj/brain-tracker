import React, { Fragment, useState } from 'react';
import { Title, Dropdown, Button, Column } from 'rbx';
import { connect } from 'react-redux';
import {
  addSleepEntry,
  setVisitibilityFilter,
  getSleeps
} from '../ducks/actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Random data generating utilities
const randomDate = (start = new Date(2019, 6, 1), end = new Date()) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString()
    .split('T')[0];

const randomValue = () => Math.floor(Math.random() * 12) + 1;

function SleepForm(props) {
  const [hours, setHours] = useState(null);
  const [date, setDate] = useState(new Date());

  if (props.user.name !== 'Guest')
    // TODO: POST to User Table
    return (
      <Fragment>
        <Title subtitle>Sleep Form</Title>
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
          <Column>
            <Dropdown>
              <Dropdown.Trigger>
                <Button>Hours Slept: {hours ? hours : '???'}</Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Content>
                  {Array(12)
                    .fill(null)
                    .map((item, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          onClick={() => {
                            setHours(index + 1);
                            console.log(hours + ' hours slept');
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
                if (!hours) return console.log(`Enter hours slept for ${date}`);

                fetch(`/api/sleep/${props.user.id}`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    sleep_time: hours
                  })
                })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data);
                    // Reset State
                    setDate(new Date());
                    setHours(null);
                    props.grabSleepData(props.user.id);
                  });
              }}
            >
              Submit
            </Button>
          </Column>
          <Column narrow>
            <Button
              onClick={() => props.setChartData('SHOW_SLEEP')}
              disabled={props.visFilter === 'SHOW_SLEEP'}
            >
              View Sleep
            </Button>
          </Column>
        </Column.Group>
      </Fragment>
    );
  return (
    <Fragment>
      <Title subtitle>Sleep Form</Title>
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
    </Fragment>
  );
}

const mapStateToProps = state => ({
  visFilter: state.visFilter,
  user: state.auth
});

const mapDispatchToProps = dispatch => ({
  addEntry: (d, v) => dispatch(addSleepEntry(d, v)),
  setChartData: f => dispatch(setVisitibilityFilter(f)),
  grabSleepData: v => dispatch(getSleeps(v))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SleepForm);
