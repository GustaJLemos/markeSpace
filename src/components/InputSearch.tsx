import { Box, Center, Divider, HStack, Icon, View, useTheme } from "native-base";
import { Input } from "./Input";
import { FontAwesome } from '@expo/vector-icons';
import { Sliders } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

const HIT_SLOP_SIZE = { bottom: 20, left: 20, right: 20, top: 20 }

export function InputSearch() {
  const { colors } = useTheme();

  return (
    <HStack alignItems='center' w='full' bg='gray.700' rounded='md'>
      <Input
        flex={1}
        placeholder="Buscar anúncio"
        _focus={{
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: "gray.700"
        }}
        mt='0'
      />
      <HStack alignItems='center' py='3' mx='3'>
        <TouchableOpacity hitSlop={HIT_SLOP_SIZE} onPress={() => { }} >
          <Icon
            as={FontAwesome}
            name="search"
            color='gray.200'
            size='5'
          />
        </TouchableOpacity>
        <Divider color={'red.700'} bgColor={'gray.400'} minH='full' size='0.5' mx='3' />
        <TouchableOpacity hitSlop={HIT_SLOP_SIZE} onPress={() => { }}>
          <Sliders weight="bold" size={26} color={colors.gray[200]} />
        </TouchableOpacity>
      </HStack>
    </HStack>
  )
}