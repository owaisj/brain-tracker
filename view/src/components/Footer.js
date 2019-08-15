import React, { useState } from 'react';
import { Footer, Tile, Title, Content, Button } from 'rbx';

const ContentBlock = props => (
  <Tile kind="parent" vertical>
    <Title size={6}>{props.title}</Title>
    <Content size="small">
      <p style={{ padding: '0.5em' }}>{props.children}</p>
    </Content>
  </Tile>
);

// Named Credits
export default function() {
  const [region, setRegion] = useState(0);

  // TODO: Add country information
  const information = [
    {
      country: 'United States',
      name: 'National Suicide Prevention Lifeline',
      number: '1-800-273-8255',
      desc:
        '(From website): The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals.'
    },
    {
      country: 'Canada',
      name: 'Crisis Services Canada',
      number: '1-833-456-4566',
      desc: 'Suicide prevention and support'
    },
    {
      country: 'Mexico',
      name: 'SAPTEL',
      number: '55-5259-8121',
      desc: 'Free and available 24 hours a day, 365 days a year.'
    },
    {
      country: 'United Kingdom',
      name: 'Samaritans',
      number: '116-123',
      desc: 'Available 24 hours a day, 365 days a year.'
    }
  ];

  return (
    <Footer>
      <Tile kind="ancestor">
        <ContentBlock title="About">
          This is a personal brain tracking application with data visualization.
          You can record your thoughts, the hours you've slept, and a grade of
          your mood.
        </ContentBlock>
        <ContentBlock title="Credits">Github Link, Portfolio Link</ContentBlock>
        {/* Crisis Line */}
        <Tile kind="parent" vertical>
          <Tile kind="child">
            <Title size={6}>{information[region].name}</Title>
            <Title size={6} subtitle>
              {information[region].number}
            </Title>
            <Content size="small">{information[region].desc}</Content>
          </Tile>
          {/* Country Toggles */}
          <Tile kind="child">
            <Button.Group>
              {information.map((country, index) => {
                return (
                  <Button
                    rounded
                    outlined
                    color="dark"
                    size="small"
                    onClick={() => setRegion(index)}
                    key={index}
                    disabled={region === index}
                  >
                    {country.country}
                  </Button>
                );
              })}
            </Button.Group>
          </Tile>
        </Tile>
      </Tile>
    </Footer>
  );
}
