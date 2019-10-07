import React from "react";
import { MainLayout } from "Layouts";
import { Box, Text, Button } from "UI";
// import { buttons } from "../styles/variables/buttons";

// console.log("buttons: ", buttons);

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Home</h1>

      <Button>Default</Button>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button tertiary>Tertiary</Button>
      <Button accent>Accent</Button>
      <Button white>White</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>
      <Button offBlack>OffBlack</Button>
      <Button black>Black</Button>
      <Button info>Info</Button>
      <Button error>Error</Button>
      <Button success>Success</Button>
      <Button warning>Warning</Button>
      <Button code>Code</Button>
      <Button link>Link</Button>

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

      <Box bg="primary.base" minHeight={10} minWidth={10} mt={7}>
        <Text textTransform="capitalize" columns="240px 3" lineHeight="body">
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
