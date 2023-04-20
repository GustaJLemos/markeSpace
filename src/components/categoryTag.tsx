import { Box, HStack, Icon, Text, IBoxProps } from "native-base";
import { ProductCategoryType } from "../types/ProductCategory";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

type Props = IBoxProps & {
  category: ProductCategoryType,
  canBeDeselected?: boolean;
  onPress?: () => void;
}

export function CategoryTag({ category, canBeDeselected = false, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      {/* TODO pensar em uma maneira melhor de mostrar que tá selecionado ou não */}
      <Box
        rounded='full'
        justifyContent='center'
        bg={canBeDeselected ? 'blue.light' : category === 'new' ? 'blue.default' : 'gray.500'}
        // TODO canBeDeselected se for true muda a cor pro light
        // TODO tenq dar a possibilidade de selecionar e desselecionar
        mt='1'
        px='2'
        {...rest}
      >
        <HStack>
          <Text
            color={category === 'new' ? 'gray.700' : 'gray.300'}
            fontSize='10'
            fontFamily='heading'
            textTransform='uppercase'
          >
            {category === 'new' ? 'novo' : 'usado'}
          </Text>
          {canBeDeselected && (
            <Icon
              as={AntDesign}
              name="closecircle"
              color='gray.700'
              ml='1'
            />
          )}
        </HStack>
      </Box>
    </TouchableOpacity>
  )
}