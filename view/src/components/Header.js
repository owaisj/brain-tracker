import React from 'react';
import { Hero, Container, Title } from 'rbx';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Hero color="success">
      <Hero.Body>
        <Container>
          <Title>
            <Link className="title-link" to="/">
              Brain Tracker
            </Link>
          </Title>
        </Container>
      </Hero.Body>
    </Hero>
  );
}
