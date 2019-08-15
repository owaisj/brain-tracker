import React from 'react';
import { Section, Container, Tile } from 'rbx';
import BlogForm from '../components/BlogForm';
import BlogPosts from '../components/BlogPosts';
import Sidebar from '../components/Sidebar';

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <Tile kind="ancestor">
          {/* Column A */}
          <Sidebar
            title="Your Journal"
            description="This is a page for you to enter your thoughts in journal form."
          />
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
