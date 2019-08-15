import React, { useState } from 'react';
import { Footer, Tile, Title, Content, Button } from 'rbx';

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
        'The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals.'
    },
    { country: 'Canada', number: 'Soon', desc: 'soon' },
    { country: 'Mexico', number: 'Soon', desc: 'soon' },
    { country: 'United Kingdom', number: 'Soon', desc: 'soon' }
  ];

  return (
    <Footer>
      <Tile kind="ancestor">
        <Tile kind="parent">
          <Title size={6}>Credits</Title>
        </Tile>
        <Tile kind="parent">
          <Title size={6}>Made by Owais</Title>
        </Tile>
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
