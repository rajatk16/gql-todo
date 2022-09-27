import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Container, Heading, Button, Flex } from 'theme-ui';

const HomePage = props => {
  useEffect(() => {
    netlifyIdentity.init();
  })
  return (
    <Container>
      <Flex sx={{ flexDirection: 'row', justifyContent: 'space-between', padding: 3 }}>
        <Heading as="h1">Get S**t Done!</Heading>
        <Flex sx={{justifyContent: 'space-between'}}>
          <Button
            onClick={() => {
              netlifyIdentity.open()
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              console.log(netlifyIdentity.currentUser())
            }}
          >
            log user
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default HomePage;