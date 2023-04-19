import { Box, Text } from "native-base";
import { ProductCategoryType } from "../types/ProductCategory";

type Props = {
  category: ProductCategoryType
}

export function CategoryTag({ category }: Props) {
  return (
    <Box
      h='5'
      rounded='full'
      justifyContent='center'
      bg={category === 'new' ? 'blue.light' : 'gray.500'}
      mt='1'
      px='2'
    >
      <Text
        color={category === 'new' ? 'gray.700' : 'gray.300'}
        fontSize='10'
        fontFamily='heading'
        textTransform='uppercase'
      >
        {category === 'new' ? 'novo' : 'usado'}
      </Text>
    </Box>
  )
}