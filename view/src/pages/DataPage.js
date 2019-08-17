import React from 'react';
import { connect } from 'react-redux';
import { Section, Container, Tile, Notification, Title } from 'rbx';
import TableComponent from '../components/DataTable';
import Sidebar from '../components/Sidebar';
import MoodForm from '../components/MoodForm';
import SleepForm from '../components/SleepForm';

// TODO: Use same hook from graph component
const DataPage = props => {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          {/* Column A */}
          <Sidebar
            title="Data Page"
            description="A page for you to look over your information. This page will have instances of the form objects so you can add to the data and view it on a table"
          >
            <MoodForm />
            <SleepForm />
          </Sidebar>
          {/* Column B */}
          <Tile kind="parent" vertical size={8}>
            {/* Row 1 */}
            <Tile
              kind="child"
              as={Notification}
              color="info"
              style={{ border: '2px solid white' }}
            >
              <Title>
                {props.user.name}'s{' '}
                {props.visFilter === 'SHOW_MOOD' ? 'Mood' : 'Sleep'} Data
              </Title>
              {/* Row 2 */}
              {props.visFilter === 'SHOW_MOOD' ? (
                <TableComponent data={props.mood} type="Mood" />
              ) : (
                <TableComponent data={props.sleep} type="Sleep" />
              )}
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </Section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    mood: state.mood.moodData,
    sleep: state.sleep.sleepData,
    user: state.auth,
    visFilter: state.visFilter
  };
};

export default connect(mapStateToProps)(DataPage);
