import { Flex } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";


const CartWidget = () => {
    return (
        <Flex alignItems={"center"}> <FaCartShopping size={32}/> 0
        </Flex>
    );
};

export default CartWidget;