import { 
  Box, 
  Heading, 
  Image, 
  SimpleGrid, 
  Text, 
  Badge,
  Skeleton,
  useColorModeValue
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import PropTypes from 'prop-types';

const ItemCard = ({ id, image, title, description, price, discount }) => {
  const navigate = useNavigate();
  
  // Safely convert to numbers with fallbacks
  const numericPrice = Number(price) || 0;
  const numericDiscount = Number(discount) || 0;
  
  // Calculate discounted price with safeguards
  const priceAfterDiscount = numericDiscount > 0 
    ? (numericPrice - (numericPrice * numericDiscount) / 100).toFixed(2)
    : numericPrice.toFixed(2);

  const hasDiscount = numericDiscount > 0;
  const cardBg = useColorModeValue(
    "linear(to-r, blue.400, purple.400)",
    "linear(to-r, blue.600, purple.600)"
  );

  return (
    <Box
      as="article"
      bgGradient={cardBg}
      width={{ base: "100%", sm: "300px" }}
      borderWidth="1px"
      borderRadius="lg"
      color="white"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ 
        transform: "translateY(-5px)", 
        boxShadow: "xl",
        cursor: "pointer"
      }}
      onClick={() => navigate(`/item/${id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/item/${id}`)}
    >
      {/* {hasDiscount && (
        <Badge 
          colorScheme="red" 
          position="absolute" 
          top={2} 
          right={2}
          fontSize="sm"
          borderRadius="full"
          px={2}
          py={1}
        >
          {numericDiscount}% OFF
        </Badge>
      )}
       */}
      <Box position="relative" pt="100%">
        <Image
          alt={title || 'Product image'}
          src={image}
          fallback={<Skeleton position="absolute" top={0} left={0} w="100%" h="100%" />}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="contain"
          p={4}
          bg="white"
          borderTopRadius="lg"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300?text=No+Image';
          }}
        />
      </Box>
      
      <Box p={4}>
        <Heading as="h3" size="md" mb={2} noOfLines={1}>
          {title || 'Untitled Product'}
        </Heading>
        <Text noOfLines={2} mb={4} opacity={0.9}>
          {description || 'No description available'}
        </Text>
        
        <Box>
          {hasDiscount ? (
            <>
              <Text as="del" fontSize="md" mr={2}>
                ${numericPrice.toFixed(2)}
              </Text>
              <Text as="span" fontSize="xl" fontWeight="bold" color="yellow.300">
                ${priceAfterDiscount}
              </Text>
            </>
          ) : (
            <Text fontSize="xl">${numericPrice.toFixed(2)}</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

ItemCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ItemCard.defaultProps = {
  image: 'https://via.placeholder.com/300?text=No+Image',
  title: 'Untitled Product',
  description: 'No description available',
  price: 0,
  discount: 0,
};

const ItemListContainer = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <Box width="100%" p={4}>
        <SimpleGrid columns={[1, 2, 3]} spacingX="40px" spacingY="20px">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} height="400px" borderRadius="lg" />
          ))}
        </SimpleGrid>
      </Box>
    );
  }

  return (
    <Box width="100%" p={4}>
      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 3 }} 
        spacing={{ base: "20px", md: "40px" }}
      >
        {products?.map((product) => (
          <ItemCard
            key={product.id}
            id={product.id}
            image={product.thumbnail}
            title={product.title}
            description={product.description}
            price={product.price}
            discount={product.discountPercentage}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

ItemListContainer.propTypes = {
  products: PropTypes.array,
  isLoading: PropTypes.bool,
};

ItemListContainer.defaultProps = {
  products: [],
  isLoading: false,
};

export default ItemListContainer;