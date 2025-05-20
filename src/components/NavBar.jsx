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
import { useEffect, useState } from "react";
import { getAllCategories } from "../services/products.service";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100vw"
      padding="0 20px"
      height="7vh"
      border="1px solid #2e2e2e"
      bgColor={"blue.100"}
    >
      <Text className="test" onClick={() => navigate("/")} cursor={"pointer"}>
        Shoes Santiago
      </Text>
      <Menu height={"200px"}>
        <MenuButton as={Button}>Categorias</MenuButton>
        <MenuList>
          {categories.map((item) => {
            return <MenuItem key={item.slug} onClick={() => navigate(`/category/${item.slug}`)}>{item.name}</MenuItem>;
          })}
          <MenuItem>Jordans</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
