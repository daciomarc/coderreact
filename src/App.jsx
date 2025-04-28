import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListcontainer from './components/ItemListContainer'


const App = () => { 
  
  return (
    <>
      <ChakraProvider>
        <Box height={"100vh"} bgColor={"darkgray"} >
        <NavBar />
        <ItemListcontainer greeting="Bienvenidos a Shoes Santiago"/>
        </Box>
    </ChakraProvider>
    </>
  )
}

export default App
