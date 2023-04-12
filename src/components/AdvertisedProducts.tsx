import { Box, HStack, Icon, Text, VStack } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import { Touchable, TouchableOpacity } from "react-native";

export function AdvertisedProducts() {
  return (
    <TouchableOpacity onPress={() => { }} activeOpacity={0.8}>
      <HStack w='full' px='5' py='3' bg='blue.withOpacity' rounded='md'>
        <HStack alignItems='center'>
          <Icon
            as={AntDesign}
            name="tago"
            color='blue.light'
            size='5'
          />
          <VStack ml='4'>
            <Text
              color='gray.200'
              fontSize='20'
              fontFamily='heading'
            >
              4
            </Text>
            <Text
              color='gray.200'
              fontSize='12'
              fontFamily='body'
            >
              anúncios ativos
            </Text>
          </VStack>
        </HStack>

        <HStack flex={1} alignItems='center' justifyContent='flex-end' space='2'>
          <Text
            color='blue.light'
            fontSize='12'
            fontFamily='heading'
          >
            Meus anúncios
          </Text>
          <Icon
            as={AntDesign}
            name="arrowright"
            color='blue.light'
            size='4'
          />
        </HStack>
      </HStack>
    </TouchableOpacity>
  );
}