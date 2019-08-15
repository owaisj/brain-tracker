import React from 'react';
import { Section, Container, Tile } from 'rbx';
import BlogForm from '../components/BlogForm';
import BlogPosts from '../components/BlogPosts';
import Navigation from '../components/NavPanel';

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          {/* Column A */}
          <Navigation />
          {/* Column B */}
          <Tile kind="parent" size={8} vertical>
            <BlogForm />
            <BlogPosts />
          </Tile>
        </Tile>
      </Container>
    </Section>
  );
}
