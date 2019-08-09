import React, { useState, useEffect } from 'react';
import { Section, Container, Tile, Notification, Title, Content } from 'rbx';
import Moment from 'moment';
import Navigation from '../components/Navigation';

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  let counter = 1;

  useEffect(() => {
    console.log('Use Effect has been triggered ' + counter + ' times');
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data.slice(0, 4));
        setLoading(false);
        setPosts(data.slice(0, 4));
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [counter]);

  const PageContent = () => {
    let output;
    const date = Moment().format();
    if (loading) {
      output = (
        <Tile as={Notification} kind="child" color="success">
          Loading
        </Tile>
      );
    } else {
      output = posts.map((p, i) => {
        return (
          <Tile key={i} as={Notification} kind="child" color="success">
            <Title>{p.title}</Title>
            <Title subtitle>{date}</Title>
            <Content>{p.body}</Content>
          </Tile>
        );
      });
    }
    return (
      <Tile kind="parent" size={8} vertical>
        {output}
      </Tile>
    );
  };

  // Blog Page
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          <Navigation />
          <PageContent />
        </Tile>
      </Container>
    </Section>
  );
}
