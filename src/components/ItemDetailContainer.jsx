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

const ItemDetailContainer = ({ product }) => {
  
  const [imageLoading, setImageLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  
  // color mode valores
  const textColor = useColorModeValue("gray.900", "gray.400");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const descriptionColor = useColorModeValue("gray.500", "gray.400");

  // formato de precio
  const formatPrice = (price) => {
    const numericPrice = Number(price) || 0;
    return numericPrice.toFixed(2);
  };

  useEffect(() => {
    if (product) {
      // First try thumbnail, then first image from array, then fallback
      const img = product.thumbnail || 
                 (product.images && product.images.length > 0 ? product.images[0] : null) || 
                 'https://via.placeholder.com/600x400?text=No+Image';
      setMainImage(img);
      setImageLoading(true); // Reset loading state when image changes
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
            borderRadius="md"
            overflow="hidden"
            bg="white"
          >
            {imageLoading && (
              <Skeleton 
                position="absolute"
                w="100%"
                h="100%"
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
              p={4}
              onLoad={() => setImageLoading(false)}
              onError={handleImageError}
              display={imageLoading ? "none" : "block"}
            />
          </Box>
        </Flex>
        
        {/* Right column with product details */}
        <Stack spacing={{ base: 6, md: 10 }}>
          {/* Product title and price */}
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title || 'Untitled Product'}
            </Heading>
            <Text
              color={textColor}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${formatPrice(product.price)}
            </Text>
          </Box>

          {}
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

          {/* componente para agregar al carrito */}
          <ItemCount product={product} />

          {/* info de envio */}
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