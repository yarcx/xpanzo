"use client";

import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import BigLogo from "./components/BigLogo";

export default function Home() {
  return (
    <Box
      minH='50vh'
      display={"flex"}
      justifyContent={"start"}
      pt='1rem'
      flexDir={"column"}
      alignItems={"center"}
    >
      <BigLogo />
      <Box mt='2rem'>
        <Tabs variant='unstyled' colorScheme='green'>
          <TabList display='flex' gap='9'>
            <Tab px='1.5rem' _selected={{ color: "brand.900" }} fontWeight={"bold"}>
              All
            </Tab>
            <Tab
              px='1.5rem'
              _selected={{ color: "brand.900", borderColor: "red.600" }}
              fontWeight={"bold"}
            >
              Companies
            </Tab>
            <Tab px='1.5rem' _selected={{ color: "brand.900" }} fontWeight={"bold"}>
              Phones
            </Tab>
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
          <TabPanels>
            <TabPanel>
              <p>All</p>
            </TabPanel>
            <TabPanel>
              <p>Companies</p>
            </TabPanel>
            <TabPanel>
              <p>Phones</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
