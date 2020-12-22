import React from "react";
import { Image, Box, Card, Heading, Text, Button } from "rebass";
import { useSelector } from "react-redux";
const Check = (props) => {
  const counter = useSelector((state) => state.counter);
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
          <Heading as="h3">Card Demo where counter is {counter}</Heading>
          <Text fontSize={0}>You can edit this code</Text>
        </Box>
      </Card>
    </Box>
  );
};

export default Check;
