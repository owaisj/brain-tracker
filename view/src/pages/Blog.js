import React, { useState, useEffect } from 'react';
import { Section, Container, Tile, Notification, Title, Content } from 'rbx';
import Moment from 'moment';
import { Link } from 'react-router-dom';

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
  }, []);

  const date = Moment().format();
  const pageContent = loading
    ? 'Loading'
    : posts.map((p, i) => {
        return (
          <Tile key={i} as={Notification} kind="child" color="success">
            <Title>{p.title}</Title>
            <Title subtitle>{date}</Title>
            <Content>{p.body}</Content>
          </Tile>
        );
      });

  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          <Tile kind="parent">
            <Tile kind="child" as={Notification} color="danger">
              <Title>Sidebar</Title>
              <Title subtitle>
                <Link to="/dashboard">View Dashboard</Link>
              </Title>
            </Tile>
          </Tile>
          <Tile kind="parent" size={8} vertical>
            {pageContent}
          </Tile>
        </Tile>
      </Container>
    </Section>
  );
}
