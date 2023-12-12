"use client";
import { Container, HStack, Text } from "@chakra-ui/react";
import BigLogo from "./BigLogo";
import Link from "next/link";

const Footer = () => {
  return (
    <Container
      as='footer'
      pos={"absolute"}
      bottom={0}
      display='flex'
      maxH='300px'
      h='100%'
      maxW='100%'
      bg='brand.700'
    >
      <HStack
        justify={"center"}
        bg='brand.700'
        align={"center"}
        flexGrow={1}
        h='100%'
        gap={["0rem", "4rem", "7rem", "9rem"]}
        flexWrap={"wrap"}
      >
        <BigLogo />

        <HStack gap='8' pt={["0", "0", "2rem", "2rem"]} align='center'>
          {["CONTACT", "PHONES", "STORE"].map((text: string, index: number) => {
            return (
              <Text
                key={index}
                color='BLACK'
                as='span'
                // display={["none", "none", "inline-block", "inline-block"]}
                fontWeight={"bold"}
              >
                <Link href={"/"}>{text}</Link>
              </Text>
            );
          })}
        </HStack>
      </HStack>
    </Container>
  );
};

export default Footer;
