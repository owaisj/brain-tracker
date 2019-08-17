import React from 'react';
import { Section, Container, Tile, Title, Content, Notification } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPencilAlt, faSun } from '@fortawesome/free-solid-svg-icons';
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
            <Tile
              as={Notification}
              kind="child"
              color="info"
              style={{ border: '2px solid white' }}
            >
              <Title>Features</Title>
              <Content />
              <Title subtitle size={6}>
                <FontAwesomeIcon
                  style={{ marginRight: '0.5em' }}
                  icon={faPencilAlt}
                />{' '}
                Journal:{' '}
                <Content as="span" size="small">
                  Record your thoughts and feelings.
                </Content>
              </Title>

              <Title subtitle size={6}>
                <FontAwesomeIcon
                  style={{ marginRight: '0.5em' }}
                  icon={faSun}
                />{' '}
                Mood:{' '}
                <Content as="span" size="small">
                  Grade how you're feeling from 1-10.
                </Content>
              </Title>
              <Title subtitle size={6}>
                <FontAwesomeIcon
                  style={{ marginRight: '0.5em' }}
                  icon={faBed}
                />{' '}
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
