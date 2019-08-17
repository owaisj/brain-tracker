import React, { Fragment } from 'react';
import { Hero, Container, Title } from 'rbx';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import CustomNav from './Navigation';

const Header = props => {
  console.log('Location Path Name: ' + props.location.pathname.substring(1));

  const title = (function(path) {
    if (path === '') return 'Home';
    return path.charAt(0).toUpperCase() + path.substring(1);
  })(props.location.pathname.substring(1));

  return (
    <Fragment>
      <Helmet>
        <title>Brain Tracker: {title}</title>
      </Helmet>
      <CustomNav />
      <Hero color="success">
        <Hero.Body>
          <Container>
            <Title>
              <Link className="title-link" to="/">
                Brain Tracker: {title}
              </Link>
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
    </Fragment>
  );
};

export default withRouter(Header);
