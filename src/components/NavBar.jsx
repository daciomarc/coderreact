import {
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { useNavigate } from "react-router";
import { useGetFirestoreDocs } from "../hooks/useGetFirestoreDocs";

const NavBar = () => {
  const { items: categories } = useGetFirestoreDocs("categories");
  const navigate = useNavigate();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      padding="1rem"
      height="7vh"
      backgroundColor="#2e2e2e"
      color="#fff"
      boxShadow="md"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        cursor="pointer"
        onClick={() => navigate("/")}
      >
        Shoes Santiago
      </Text>
      <Menu>
        <MenuButton as={Button} variant="outline" colorScheme="white">
          Categorias
        </MenuButton>
        <MenuList>
          {categories.map((item) => (
            <MenuItem
              key={item.slug}
              onClick={() => navigate(`/category/${item.slug}`)}
            >
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;