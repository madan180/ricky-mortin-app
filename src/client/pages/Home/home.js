import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { HomeComponentWrapper } from './home.style';

const Home = () => {
  return (
    <HomeComponentWrapper className="home-warpper">
      <h3>
        A simple React server side appliation that demonstrates React's
        isomorphic nature and how we can use redux to manage application state
        on server and client.
      </h3>
      <h4>Please click "Shows" under menu to go to the application.</h4>
    </HomeComponentWrapper>
  );
};

export default Home;
