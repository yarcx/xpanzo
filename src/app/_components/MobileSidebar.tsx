"use client";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Divider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { Nav_Links } from "../utils/constants";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faUser } from "@fortawesome/free-solid-svg-icons";

import { IMobileSidebar } from "../utils/types";

const MobileSidebar: FC<IMobileSidebar> = ({ isOpen, onClose, gotoRoute }) => {
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton rounded='full' border='1px solid' borderColor={"lightgray"} />
        <DrawerHeader p='2rem'></DrawerHeader>

        <Divider />
        <DrawerBody display={"flex"} flexDir={"column"} gap='4' alignItems={"start"}>
          {Nav_Links.map(({ text, link }) => {
            const activePath = pathname === link;
            return (
              <Text
                onClick={() => gotoRoute(link)}
                key={text}
                cursor='pointer'
                as='p'
                fontSize={"small"}
                fontWeight={activePath ? "bold" : "normal"}
              >
                {text.toUpperCase()}
              </Text>
            );
          })}
          <Button
            onClick={() => gotoRoute()}
            bg='none'
            _hover={{ bg: "none", opacity: "0.7" }}
            leftIcon={
              <VStack
                align={"center"}
                justify={"center"}
                h='20px'
                rounded='full'
                w='20px'
                border='1px solid'
              >
                <FontAwesomeIcon icon={faUser} size='sm' />
              </VStack>
            }
            h='max-content'
            fontSize={"small"}
            fontWeight={"normal"}
            p='0'
            transition={".4 all linear"}
          >
            LOGIN
          </Button>
          <Button
            onClick={() => gotoRoute()}
            bg='none'
            h='max-content'
            _hover={{ bg: "none", opacity: "0.7" }}
            leftIcon={
              <VStack
                align={"center"}
                justify={"center"}
                h='20px'
                rounded='full'
                w='20px'
                border='1px solid'
              >
                <FontAwesomeIcon icon={faPencil} size='sm' />
              </VStack>
            }
            fontSize={"small"}
            fontWeight={"normal"}
            p='0'
            transition={".4 all linear"}
          >
            REGISTRATION
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileSidebar;
