import { Flex } from "@chakra-ui/react"

const ItemListcontainer = (props) => {
    return (
        <Flex alignItems={"center"} width={"100vw"} textAlign={"center"} justifyContent={"center"} fontWeight={"bold"} fontSize={"2rem"} >
            {props.greeting}  
        </Flex>
    )
}    
export default ItemListcontainer