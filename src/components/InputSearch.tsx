import { Box, Center, HStack, Icon, useTheme } from "native-base";
import { Input } from "./Input";
import { FontAwesome } from '@expo/vector-icons';
import { Sliders } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export function InputSearch() {
  const { colors } = useTheme();

  return (
    <HStack alignItems='center' w='full' bg='gray.700' rounded='md' pr='3'>
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
      <HStack alignItems='center'>
        <TouchableOpacity onPress={() => { }}>
          <Icon
            as={FontAwesome}
            name="search"
            color='gray.200'
            size='4'
          />
        </TouchableOpacity>
        {/* TODO construi o divisor */}
        <Center w='1' h='full' color='black' />
        <TouchableOpacity onPress={() => { }}>
          <Sliders size={24} color={colors.gray[200]} />
        </TouchableOpacity>
      </HStack>
    </HStack>
  )
}