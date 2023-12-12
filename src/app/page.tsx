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
                  minW={["", "", "120px", "140px"]}
                  key={index}
                  px='1rem'
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
          <TabIndicator mt='-1.5px' height='2px' bg='brand.900' borderRadius='1px' />
        </Tabs>
      </Box>
    </Box>
  );
}
