import React from "react";
import { Image, Box, Card, Heading, Text, Button } from "rebass";
const Home = (props) => {
  return (
    <Box width={256}>
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
        }}
      >
        <Image src={props.image} />
        <Box px={2}>
          <Heading as="h3">Card Demo</Heading>
          <Text fontSize={0}>You can edit this code</Text>
        </Box>
        <Button variant="primary" mr={2}>
          Beep
        </Button>
        <Button variant="secondary">Boop</Button>
      </Card>
    </Box>
  );
};

export default Home;
