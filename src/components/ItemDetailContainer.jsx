import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Skeleton
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { keyframes } from "@emotion/react"; // Correct import for keyframes

const ItemDetailContainer = ({ product }) => {
  // Animation for image hover
  const floatAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  `;

  const [imageLoading, setImageLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  
  // Color mode values
  const textColor = useColorModeValue("gray.900", "gray.400");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const descriptionColor = useColorModeValue("gray.500", "gray.400");
  const float = `${floatAnimation} 3s ease-in-out infinite`;

  // Safely format price
  const formatPrice = (price) => {
    const numericPrice = Number(price) || 0;
    return numericPrice.toFixed(2);
  };

  useEffect(() => {
    if (product) {
      const img = product.thumbnail || 
                 (product.images && product.images[0]) || 
                 'https://via.placeholder.com/600x400?text=No+Image';
      setMainImage(img);
      setImageLoading(true);
    }
  }, [product]);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
    setImageLoading(false);
  };

  if (!product) {
    return (
      <Container maxW={"7xl"}>
        <Text>Product not found</Text>
      </Container>
    );
  }

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Box 
            position="relative" 
            w="100%" 
            h={{ base: "100%", sm: "400px", lg: "500px" }}
            borderRadius="xl"
            overflow="hidden"
            bg="white"
            boxShadow="xl"
          >
            {imageLoading && (
              <Skeleton 
                position="absolute"
                w="100%"
                h="100%"
                borderRadius="xl"
              />
            )}
            <Image
              src={mainImage}
              alt={`Product image for ${product.title || 'product'}`}
              objectFit="contain"
              w="100%"
              h="100%"
              position="absolute"
              top={0}
              left={0}
              p={8}
              onLoad={() => setImageLoading(false)}
              onError={handleImageError}
              display={imageLoading ? "none" : "block"}
              animation={float}
              _hover={{
                animation: "none",
                transform: "scale(1.05)"
              }}
              transition="transform 0.3s ease"
            />
          </Box>
        </Flex>
        
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              bgGradient="linear(to-r, blue.600, purple.600)"
              bgClip="text"
            >
              {product.title || 'Untitled Product'}
            </Heading>
            <Text
              color={textColor}
              fontWeight={300}
              fontSize={"2xl"}
              mt={2}
            >
              ${formatPrice(product.price)}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider borderColor={dividerColor} />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={descriptionColor}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {product.description || 'No description available'}
              </Text>
            </VStack>
          </Stack>

          <ItemCount product={product} />

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>Hacemos envios a todo el pais via Correo Argentino!</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ItemDetailContainer;