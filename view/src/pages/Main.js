import React from 'react';
import { Section, Container, Tile, Title, Content, Notification } from 'rbx';
import Sidebar from '../components/Sidebar';

export default function(props) {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          <Sidebar
            title="Welcome"
            description={
              <p>
                This a single-page web application to track your brain and
                mental wellness.
              </p>
            }
          />
          <Tile kind="parent" vertical size={8}>
            <Tile as={Notification} kind="child" color="info">
              <Title>Features</Title>
              <Content />
              <Title subtitle size={6}>
                Journal:{' '}
                <Content as="span" size="small">
                  Record your thoughts and feelings.
                </Content>
              </Title>

              <Title subtitle size={6}>
                Mood:{' '}
                <Content as="span" size="small">
                  Grade how you're feeling from 1-10.
                </Content>
              </Title>
              <Title subtitle size={6}>
                Sleep:{' '}
                <Content as="span" size="small">
                  Log how many hours of sleep you've gotten.
                </Content>
              </Title>
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </Section>
  );
}
