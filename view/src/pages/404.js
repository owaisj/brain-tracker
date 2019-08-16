import React from 'react';
import { Section, Container, Tile, Notification, Title, Content } from 'rbx';

export default function() {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          <Tile kind="parent" vertical>
            <Tile as={Notification} kind="child" color="info">
              <Title>You've Reached the 404 Page</Title>
              <Content>
                Use the navbar above to find what you're looking for
              </Content>
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </Section>
  );
}
