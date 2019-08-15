import React from 'react';
import { Section, Container, Tile } from 'rbx';
import Control from '../components/Control';
import Graph from '../components/Graph';

export default function Main() {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          <Control />
          <Graph />
        </Tile>
      </Container>
    </Section>
  );
}
