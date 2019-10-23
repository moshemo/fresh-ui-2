import React from 'react';
import { MainLayout } from 'Layouts';
import { Box, Text } from 'UI';
import { Button } from 'UI';
import { FontAwesomeIcon as FaIcon } from 'FontAwesome';

// import { buttons } from "../styles/variables/buttons";

// console.log("buttons: ", buttons);

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Home</h1>

      <Button>Default</Button>
      <Button iconLeft='envelope'>Save</Button>
      <Button iconRight='check' secondary>
        Save
      </Button>
      <Button icon='check' />
      <Button icon='envelope' small />
      <Button icon='envelope' medium />
      <Button icon='envelope' medium accent />
      <Button icon='envelope' large />
      {/* <Button icon>
        <FaIcon icon='envelope' />
      </Button>

      <Button icon small>
        <FaIcon icon='envelope' />
      </Button>

      <Button icon medium>
        <FaIcon icon='envelope' />
      </Button>

      <Button icon large>
        <FaIcon icon='check' />
      </Button>

      <Button secondary>
        <FaIcon icon='envelope' />
        <span>Save</span>
      </Button>

      <Button primary>
        <span>Save</span>
        <FaIcon icon='envelope' />
      </Button> */}

      <Button none>Default</Button>
      <Button rounded>Default</Button>
      <Button pill>Default</Button>
      <Button circle boxShadow='largest' width='100px' height='100px'>
        Default
      </Button>
      <Button color='primary' bg='accent'>
        Default (Styled System)
      </Button>
      <Button primary>Primary</Button>
      <Button primary outline>
        Primary Outline
      </Button>
      <Button secondary inverted>
        Secondary Inverted
      </Button>
      <Button inverted outline secondary color='black' borderColor='black'>
        Secondary (inverted outline)
      </Button>
      <Button tertiary>Tertiary</Button>
      <Button tertiary outline>
        Tertiary Outline
      </Button>
      <Button accent>Accent</Button>
      <Button white>White</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>
      <Button offBlack>OffBlack</Button>
      <Button black>Black</Button>
      <Button info>Info</Button>
      <Button error>Error</Button>
      <Button success color='white' colorHover='white'>
        Success
      </Button>
      <Button warning>Warning</Button>
      <Button code>Code</Button>
      <Button link>Link</Button>

      <Button disabled primary>
        Primary
      </Button>
      <Button disabled secondary>
        Secondary
      </Button>
      <Button disabled tertiary>
        Tertiary
      </Button>
      <Button disabled accent>
        Accent
      </Button>
      <Button disabled white>
        White
      </Button>
      <Button disabled light>
        Light
      </Button>
      <Button disabled dark>
        Dark
      </Button>
      <Button disabled offBlack>
        OffBlack
      </Button>
      <Button disabled black>
        Black
      </Button>
      <Button disabled info>
        Info
      </Button>
      <Button disabled error>
        Error
      </Button>
      <Button disabled success color='white' colorHover='white'>
        Success
      </Button>
      <Button disabled warning>
        Warning
      </Button>
      <Button disabled code>
        Code
      </Button>
      <Button disabled link>
        Link
      </Button>

      {/* <Button tiny bg="primary">
        Tiny Primary
      </Button>
      <Button small bg="secondary">
        Small Secondary
      </Button>
      <Button bg="tertiary" color="dark">
        Default Tertiary
      </Button>
      <Button medium bg="accent">
        Medium Accent
      </Button>
      <Button large bg="dark">
        Large Dark
      </Button> */}

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
