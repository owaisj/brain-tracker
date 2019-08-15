import React from 'react';
import { Section, Container, Tile, Title, Content, Notification } from 'rbx';
import Sidebar from '../components/Sidebar';

export default function() {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          <Sidebar
            title="Home Page"
            description="Information about the application"
          />
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
