"use client";
import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { IconDefinition, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactHeaders = ({ header, icon }: { header: string; icon: IconDefinition }) => {
  return (
    <Text as='h5' fontWeight={"bold"} color='brand.900' mb='2rem'>
      <FontAwesomeIcon icon={icon} />{" "}
      <Text as='span' color='black' pl='.4rem'>
        {header}
      </Text>
    </Text>
  );
};

const Page = () => {
  return (
    <Box
      minH='50vh'
      display={"flex"}
      justifyContent={"start"}
      pt='4rem'
      flexDir={"column"}
      alignItems={"center"}
      as='main'
    >
      <Text fontWeight={"bold"} fontSize={"x-large"} as='h3'>
        Contact
      </Text>

      <Container
        as='section'
        maxW='550px'
        flexWrap={"wrap"}
        display='flex'
        justifyContent={"space-between"}
      >
        {/* Headquarters */}
        <VStack textAlign={"left"}>
          <ContactHeaders header='Headquarters' icon={faLocationDot} />
          <Box as='div' w='100%' textAlign={"left"}>
            <Text>DHO s.r.o.</Text>
            <Text>Bořivojova 878/35</Text>
            <Text>130 00 Praha 3</Text>
          </Box>
        </VStack>

        {/* Email */}
        <VStack align={"start"}>
          <ContactHeaders header='Email' icon={faEnvelope} />
          <Box as='div' w='100%' textAlign={"left"}>
            <Text>info@expanzo.com</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Page;
