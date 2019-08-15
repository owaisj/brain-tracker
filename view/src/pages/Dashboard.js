import React from 'react';
import { Section, Container, Tile } from 'rbx';
import Graph from '../components/Graph';
import Sidebar from '../components/Sidebar';
import MoodForm from '../components/MoodForm';
import SleepForm from '../components/SleepForm';

export default function Main() {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          <Sidebar
            title="Your Graphs"
            description="On this page you can view your sleep and mood data over time."
          >
            <MoodForm />
            <SleepForm />
          </Sidebar>
          <Graph />
        </Tile>
      </Container>
    </Section>
  );
}
