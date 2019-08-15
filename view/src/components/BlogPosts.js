import React, { useState, useEffect, Fragment } from 'react';
import { Tile, Notification, Title, Content } from 'rbx';
import Moment from 'moment';

export default function BlogPosts(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [counter] = useState(0);

  useEffect(() => {
    console.log('Use Effect has been triggered ' + (counter + 1) + ' times');
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

  let output;
  const date = Moment().format();
  if (loading) {
    output = (
      <Fragment>
        <Tile as={Notification} kind="child" color="info">
          Loading
        </Tile>
      </Fragment>
    );
  } else {
    output = (
      <Fragment>
        {posts.map((p, i) => {
          return (
            <Tile key={i} as={Notification} kind="child" color="info">
              <Title>{p.title}</Title>
              <Title subtitle>{date}</Title>
              <Content>{p.body}</Content>
            </Tile>
          );
        })}
      </Fragment>
    );
  }
  return output;
}
