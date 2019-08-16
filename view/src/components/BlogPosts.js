import React, { useState, useEffect, Fragment } from 'react';
import { Tile, Notification, Title, Content, Help, Delete } from 'rbx';
import { grabPosts } from '../ducks/actions/journal';
import { connect } from 'react-redux';

function BlogPosts(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!props.user.id) {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {props.journal.length && props.user.id
        ? props.journal.map((p, i) => {
            return (
              <Tile
                className="journal"
                key={i}
                as={Notification}
                kind="child"
                color="info"
              >
                <Title className="post-title">{p.title}</Title>
                <Title subtitle size={6}>
                  {p.timestamp}
                </Title>
                <Content className="post-body">{p.body}</Content>
                <Help>
                  <Delete
                    onClick={() => {
                      fetch(`/api/journal/del/${p.id}`, { method: 'DELETE' })
                        .then(res => res.json())
                        .then(data => props.grabPosts(props.user.id));
                    }}
                  />
                  <span style={{ margin: '1em' }}>Delete Post</span>
                </Help>
              </Tile>
            );
          })
        : posts.map((p, i) => {
            return (
              <Tile
                className="journal"
                key={i}
                as={Notification}
                kind="child"
                color="info"
              >
                <Title className="post-title">{p.title}</Title>
                <Title subtitle size={6}>
                  {p.timestamp}
                </Title>
                <Content className="post-body">{p.body}</Content>
              </Tile>
            );
          })}
    </Fragment>
  );
}

const mapDispatchToProps = {
  grabPosts
};

const mapStateToProps = (state, ownProps) => {
  return {
    journal: state.blog,
    user: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPosts);
