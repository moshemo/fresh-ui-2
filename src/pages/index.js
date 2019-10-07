import React from 'react';
import { MainLayout } from 'Layouts';
import { Box, Text, Button } from 'UI';
import { buttons } from '../styles/variables/buttons';

console.log('buttons: ', buttons);

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Home</h1>
      <Button tiny bg='primary'>
        Tiny Primary
      </Button>
      <Button small bg='secondary'>
        Small Secondary
      </Button>
      <Button bg='tertiary' color='dark'>
        Dark Tertiary
      </Button>
      <Button medium bg='accent'>
        Medium Accent
      </Button>
      <Button large bg='dark'>
        Large Dark
      </Button>

      <Box bg='primary.base' minHeight={10} minWidth={10} mt={7}>
        <Text textTransform='capitalize' columns='240px 3' lineHeight='body'>
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content. Here is some
          text content. Here is some text content. Here is some text content.
          Here is some text content. Here is some text content.
        </Text>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
