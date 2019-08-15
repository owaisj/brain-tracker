import React, { useState, useEffect, Fragment } from 'react';
import { Tile, Notification, Title, Content } from 'rbx';
import Moment from 'moment';

export default function BlogPosts(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setPosts(data.slice(0, 3));
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const timestamp = Moment().format('h:mma dddd, MMMM Do YYYY');
  if (loading) {
    return (
      <Fragment>
        <Tile as={Notification} kind="child" color="info">
          Loading
        </Tile>
      </Fragment>
    );
  }
  return (
    <Fragment>
      {posts.map((p, i) => {
        return (
          <Tile
            className="journal"
            key={i}
            as={Notification}
            kind="child"
            color="info"
          >
            <Title className="post-title">{p.title}</Title>
            <Title subtitle>{timestamp}</Title>
            <Content className="post-body">{p.body}</Content>
          </Tile>
        );
      })}
    </Fragment>
  );
}
