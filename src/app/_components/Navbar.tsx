"use client";
import { Button, Container, HStack, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPencil, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import MobileSidebar from "./MobileSidebar";
import { Nav_Links } from "../utils/constants";
import SmallLogo from "./SmallLogo";

const Navbar = () => {
  const pathname = usePathname();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { push } = useRouter();

  const gotoRoute = (route?: string) => {
    if (route) {
      push(route);
    }
    return onClose();
  };

  return (
    <Container maxW='100%' bg='brand.900' as='nav' h='70px' display='flex' alignItems={"center"}>
      <HStack justify={"space-between"} w='100%' alignItems={"center"}>
        <HStack gap='4'>
          <Button
            bg={"none"}
            rounded={"full"}
            h='12'
            w='12'
            colorScheme='blackAlpha'
            opacity={".4"}
            transition={".4 all linear"}
            padding='0'
            onClick={onOpen}
          >
            <FontAwesomeIcon icon={faBars} size='xl' color='lightgray' opacity='0.6' />
          </Button>

          {Nav_Links.map(({ text, link }, index) => {
            const activePath = pathname === link;
            return (
              <Text
                key={index}
                color='white'
                as='span'
                onClick={() => gotoRoute(link)}
                display={["none", "none", "inline-block", "inline-block"]}
                fontWeight={activePath ? "bold" : "semibold"}
                fontSize={"small"}
                cursor='pointer'
              >
                {text.toUpperCase()}
              </Text>
            );
          })}
        </HStack>

        {pathname === Nav_Links[1].link && (
          <Link href='/'>
            <SmallLogo />
          </Link>
        )}

        <HStack>
          <Button
            bg='none'
            _hover={{ bg: "none", opacity: "0.7" }}
            leftIcon={
              <VStack
                align={"center"}
                justify={"center"}
                h='35px'
                bg='brand.800'
                rounded='full'
                w='35px'
              >
                <FontAwesomeIcon icon={faUser} size='sm' />
              </VStack>
            }
            color='white'
            fontWeight={"normal"}
            px='0'
            transition={".4 all linear"}
            fontSize={"small"}
          >
            LOGIN
          </Button>

          <Button
            bg='none'
            _hover={{ bg: "none", opacity: "0.7" }}
            display={["none", "none", "block", "block"]}
            leftIcon={
              <VStack
                align={"center"}
                justify={"center"}
                h='35px'
                bg='brand.800'
                rounded='full'
                w='35px'
              >
                <FontAwesomeIcon icon={faPencil} size='sm' />
              </VStack>
            }
            color='white'
            fontWeight={"normal"}
            pr='0'
            transition={".4 all linear"}
            fontSize={"small"}
          >
            REGISTRATION
          </Button>
        </HStack>
      </HStack>

      <MobileSidebar isOpen={isOpen} onClose={onClose} gotoRoute={gotoRoute} />
    </Container>
  );
};

export default Navbar;
