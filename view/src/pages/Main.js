import React from 'react';
import { Section, Container, Tile, Title, Content, Notification } from 'rbx';

export default function() {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          <Tile kind="parent" vertical>
            <Tile as={Notification} kind="child" color="info">
              <Title>Column A Title</Title>
              <Content>Column A Content</Content>
            </Tile>
          </Tile>
          <Tile kind="parent" vertical size={8}>
            <Tile as={Notification} kind="child" color="info">
              <Title>Column B Title</Title>
              <Content>Column B Content</Content>
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </Section>
  );
}
