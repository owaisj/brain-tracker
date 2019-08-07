import React from 'react';
import { Tile, Notification, Title, Content } from 'rbx';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer
} from 'victory';
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
            <VictoryChart
              domainPadding={10}
              containerComponent={<VictoryVoronoiContainer />}
            >
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
                    angle: 5,
                    fontSize: 7,
                    fill: 'white'
                  },
                  axisLabel: {
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
                  },
                  axisLabel: {
                    fill: 'white'
                  }
                }}
              />
              <VictoryLine
                interpolation="natural"
                labelComponent={<VictoryTooltip />}
                labels={props.data.map(value => {
                  const day = new Date(value.day);
                  const week = [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat',
                    'Sun'
                  ];
                  return `Entered on ${week[day.getDay()]}, ${value.day}`;
                })}
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
