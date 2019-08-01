import React from 'react';
import { Tile, Title, Notification } from 'rbx';

export default function SleepForm() {
  return (
    <Tile kind="child" as={Notification} color="success">
      <Title>Sleep Form</Title>
    </Tile>
  );
}
