import { Flex, Text, Button } from "@chakra-ui/react";
//import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
CartWidget;

const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      padding="20px 20px 20px 20px"
      border={"1px white solid"}
      margin={"1px"}
      height={"6vh"}
    >
      <Text border={"1px white solid"} borderRadius={"10px"}>Shoes Santiago</Text>
      <Menu>
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <MenuItem>Ofertas</MenuItem>
          <MenuItem>Novedades</MenuItem>
        </MenuList>
      </Menu>

      <div style={{ alignItems: "center" }}>Holamirrey</div>

      <CartWidget />
    </Flex>
  );
};

export default NavBar;
