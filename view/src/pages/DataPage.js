import React from 'react';
import { connect } from 'react-redux';
import { Section, Container, Tile, Notification, Title } from 'rbx';
import TableComponent from '../components/DataTable';

const DataPage = props => {
  return (
    <Section>
      <Container>
        <Tile
          kind="ancestor"
          as={Notification}
          color="danger"
          vertical
          size={8}
        >
          {/* Title Row */}
          <Tile kind="parent">
            <Title>{props.user.name}'s Data Page</Title>
          </Tile>
          {/* Mood Row */}
          <TableComponent data={props.mood} type="Mood" />
          <TableComponent data={props.sleep} type="Sleep" />
        </Tile>
      </Container>
    </Section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    mood: state.mood.moodData,
    sleep: state.sleep.testData,
    user: state.auth
  };
};

export default connect(mapStateToProps)(DataPage);
