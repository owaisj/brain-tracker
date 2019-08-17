import React from 'react';
import { Section, Container, Tile } from 'rbx';
import { connect } from 'react-redux';
import BlogForm from '../components/BlogForm';
import BlogPosts from '../components/BlogPosts';
import Sidebar from '../components/Sidebar';

const BlogPage = props => {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          {/* Column A */}
          <Sidebar
            title={`${props.user.name}'s Journal`}
            description={
              <p>
                Here you can enter your thoughts like a journal. Add a little
                bit of context to the hours you've slept or not slept, or how
                you've been feeling today.
              </p>
            }
          />
          {/* Column B */}
          <Tile kind="parent" size={8} vertical>
            <BlogForm />
          </Tile>
        </Tile>
        <Tile kind="ancestor">
          <Tile kind="parent" size={12} vertical>
            <BlogPosts />
          </Tile>
        </Tile>
      </Container>
    </Section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(BlogPage);
