import React from 'react'
import { Box, ChakraProvider, Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListcontainer from './components/ItemListContainer'


const App = () => { 
  
  return (
    <>
      <ChakraProvider>
        <Text color={"white"}>
        <Box height={"100vh"} bgColor={"black"} >
        <NavBar />
        <ItemListcontainer greeting="Bienvenidos a Shoes Santiago"/>
        </Box>
        </Text>
    </ChakraProvider>
    </>
  )
}

export default App
