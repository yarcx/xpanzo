"use client";
import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import BigLogo from "./_components/BigLogo";
import { Home_Tab_Links } from "./utils/constants";

export default function Home() {
  return (
    <Box
      minH='50vh'
      display={"flex"}
      justifyContent={"start"}
      pt='2rem'
      flexDir={"column"}
      alignItems={"center"}
    >
      <BigLogo />
      <Box mt='3rem'>
        <Tabs variant='unstyled'>
          <TabList display='flex' gap={4}>
            {Home_Tab_Links.map((link, index) => {
              return (
                <Tab
                  minW={"160px"}
                  key={index}
                  px='0rem'
                  _selected={{
                    color: "brand.900",
                  }}
                  _active={{}}
                  _focus={{}}
                  fontWeight={"bold"}
                >
                  {link}
                </Tab>
              );
            })}
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
          <TabPanels>
            {Home_Tab_Links.map((tab, index) => {
              return (
                <TabPanel key={index}>
                  <p>{tab}</p>
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
