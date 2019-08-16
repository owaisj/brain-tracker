import React, { useState, useEffect, Fragment } from 'react';
import { Tile, Notification, Title, Content } from 'rbx';
import { connect } from 'react-redux';
import { grabPosts } from '../ducks/actions/journal';
import Moment from 'moment';
import MZ from 'moment-timezone';

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
    } else {
      props.grabPosts(props.user.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.user.id]);

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
      {props.journal.length && props.user.id
        ? props.journal.map((p, i) => {
            // This is from the database!
            const parsedTimestamp = MZ(p.timestamp)
              .tz('America/Chicago')
              .format('dddd Do YYYY h:mma z');
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
                  {parsedTimestamp}
                </Title>
                <Content className="post-body">{p.body}</Content>
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
                  {timestamp}
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
