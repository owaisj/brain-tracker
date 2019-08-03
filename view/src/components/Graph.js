import React from 'react';
import { Tile, Notification, Title, Content } from 'rbx';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import { connect } from 'react-redux';

function Graph(props) {
  return (
    <Tile kind="parent">
      <Tile kind="child" as={Notification} color="info">
        <Title as="h2">
          {props.visFilter === 'SHOW_MOOD' ? 'Mood' : 'Sleep'} Chart
        </Title>
        <Content>
          {props.data.length ? (
            <VictoryChart domainPadding={10}>
              <VictoryAxis
                // X-Axis
                label="Day"
                tickValues={props.data.map((value, index) => index)}
                tickFormat={props.data.map((value, index) => index)}
                style={{
                  axis: {
                    stroke: '#ffffff'
                  },
                  tickLabels: {
                    angle: 25,
                    fontSize: 5,
                    fill: 'white'
                  }
                }}
              />
              <VictoryAxis
                // Y-Axis
                dependentAxis
                label={props.visFilter === 'SHOW_MOOD' ? 'Mood' : 'Sleep (hrs)'}
                tickFormat={
                  props.visFilter === 'SHOW_MOOD'
                    ? Array.from(Array(11).keys())
                    : Array.from(Array(13).keys())
                }
                style={{
                  axis: {
                    stroke: '#ffffff'
                  },
                  tickLabels: {
                    fontSize: 10,
                    fill: 'white'
                  }
                }}
              />
              <VictoryLine
                interpolation="natural"
                data={
                  props.visFilter === 'SHOW_MOOD'
                    ? props.data.map(value => value.mood)
                    : props.data.map(value => value.hours)
                }
                x="day"
                y="mood"
                style={{
                  data: {
                    stroke: '#ffffff',
                    strokeWidth: 2
                  }
                }}
              />
            </VictoryChart>
          ) : (
            `Use the ${
              props.visFilter === 'SHOW_MOOD' ? 'mood' : 'sleep'
            } form to generate data`
          )}
        </Content>
      </Tile>
    </Tile>
  );
}

const mapStateToProps = (state, ownProps) => {
  if (state.visFilter === 'SHOW_MOOD') {
    return {
      data: state.mood.testData,
      visFilter: state.visFilter
    };
  }
  return {
    // data property on the props (props.data)
    data: state.sleep.testData,
    visFilter: state.visFilter
  };
};

export default connect(mapStateToProps)(Graph);
