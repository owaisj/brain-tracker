import React from 'react';
import { Tile, Title, Table } from 'rbx';

export default function TableComponent(props) {
  return (
    <Tile kind="parent">
      <Tile kind="child" size={4}>
        <Title subtitle>{props.type} Table</Title>
      </Tile>
      <Tile kind="child">
        <Table narrow hoverable striped bordered>
          <Table.Head>
            <Table.Row>
              <Table.Heading>Date</Table.Heading>
              <Table.Heading>
                {props.type === 'Mood' ? 'Mood Value' : 'Hours Slept'}
              </Table.Heading>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {props.data.map((item, index) => {
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
      </Tile>
    </Tile>
  );
}
