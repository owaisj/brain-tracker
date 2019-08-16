import React, { Fragment } from 'react';
import { Column, Title, Table, Box, Content } from 'rbx';

export default function TableComponent(props) {
  // TODO: Divide props.data in to chunks for pagination
  return (
    <Fragment>
      <Column.Group centered>
        <Column size={4} offset={1}>
          <Title subtitle>Link to {props.type} Graph</Title>
          <Content>
            In this section you can add some data analysis or links or tips.
          </Content>
        </Column>
        <Column offset={2}>
          <Box>
            {props.data.length ? (
              <Table fullwidth hoverable striped>
                <Table.Head>
                  <Table.Row>
                    <Table.Heading>Date</Table.Heading>
                    <Table.Heading>
                      {props.type === 'Mood' ? 'Mood Value' : 'Hours Slept'}
                    </Table.Heading>
                  </Table.Row>
                </Table.Head>
                <Table.Body>
                  {props.data.reverse().map((item, index) => {
                    return (
                      <Table.Row key={index}>
                        <Table.Cell>{item.day}</Table.Cell>
                        <Table.Cell>
                          {props.type === 'Mood' ? item.mood : item.hours}
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            ) : (
              <Title subtitle>Enter some data</Title>
            )}
          </Box>
        </Column>
      </Column.Group>
    </Fragment>
  );
}
