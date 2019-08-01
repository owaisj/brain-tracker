import React from 'react';
import { Tile, Title, Notification } from 'rbx';

export default function MoodForm() {
  return (
    <Tile kind="child" as={Notification} color="primary">
      <Title>Mood Form</Title>
    </Tile>
  );
}
