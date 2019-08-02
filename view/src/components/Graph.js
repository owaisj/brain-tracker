import React from 'react';
import { Tile, Notification, Title, Content } from 'rbx';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import { connect } from 'react-redux';

function Graph(props) {
  return (
    <Tile kind="parent">
      <Tile kind="child" as={Notification} color="info">
        <Title as="h2">Chart</Title>
        <Content>
          {props.data.length ? (
            <VictoryChart domainPadding={10}>
              <VictoryAxis
                // X-Axis
                label="Day"
                tickValues={props.data.map((value, index) => index)}
                tickFormat={props.data.map(value => value.day)}
                style={{
                  axis: {
                    stroke: '#ffffff'
                  },
                  tickLabels: {
                    angle: 45,
                    fontSize: 5,
                    fill: 'white'
                  }
                }}
              />
              <VictoryAxis
                // Y-Axis
                dependentAxis
                label="Mood"
                tickFormat={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
                data={props.data.map(value => value.mood)}
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
            'Use the mood form to generate data'
          )}
        </Content>
      </Tile>
    </Tile>
  );
}

const mapStateToProps = state => {
  return {
    // data property on the props (props.data)
    data: state.mood.testData
  };
};

export default connect(mapStateToProps)(Graph);
