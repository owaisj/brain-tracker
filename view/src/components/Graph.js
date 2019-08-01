import React from 'react';
import { Tile, Notification, Title, Content } from 'rbx';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const testData = [
  { day: 'Monday', mood: 3 },
  { day: 'Tuesday', mood: 6 },
  { day: 'Wednesday', mood: 7 },
  { day: 'Thursday', mood: 4 },
  { day: 'Friday', mood: 7 },
  { day: 'Saturday', mood: 8 },
  { day: 'Sunday', mood: 5 }
];

export default function Graph() {
  return (
    <Tile kind="parent">
      <Tile kind="child" as={Notification} color="info">
        <Title as="h2">Chart</Title>
        <Content>
          <VictoryChart domainPadding={10}>
            <VictoryAxis
              // X-Axis
              label="Day"
              tickValues={[1, 2, 3, 4, 5, 6, 7]}
              tickFormat={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
              style={{
                axis: {
                  stroke: '#ffffff'
                },
                tickLabels: {
                  fontSize: 10
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
                  fontSize: 10
                }
              }}
            />
            <VictoryLine
              interpolation="natural"
              data={testData}
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
        </Content>
      </Tile>
    </Tile>
  );
}
