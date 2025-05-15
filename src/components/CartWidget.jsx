import { Flex, Spacer } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
  return (
    <Flex alignItems="center" >
        
      <CiShoppingCart size={30} /> 0 

    </Flex>
  );
};

export default CartWidget;
