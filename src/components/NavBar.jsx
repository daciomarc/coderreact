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
      width="100vw"
      padding="20px 20px 20px 20px"
      border={"1px black solid"}
      margin={"1px"}
      height={"6vh"}
    >
      <Text>Shoes Santiago</Text>
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
