import React from 'react';
import { Hero, Container, Title } from 'rbx';

export default function Header() {
  return (
    <Hero color="primary">
      <Hero.Body>
        <Container>
          <Title>Brain Tracker</Title>
        </Container>
      </Hero.Body>
    </Hero>
  );
}
