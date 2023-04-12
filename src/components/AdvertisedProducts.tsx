import { HStack, Icon, Text, VStack } from "native-base";
import { AntDesign } from '@expo/vector-icons';

export function AdvertisedProducts() {
  return (
    <HStack w='full' h='10' px='5' py='3' bg='coolGray.100'>
      <Icon
        as={AntDesign}
        name="tago"
        color='blue.light'
      />
      <VStack>
        <Text
          color='gray.300'
          fontSize='14'
          fontFamily='body'
        >
          4
        </Text>
        <Text
          color='gray.300'
          fontSize='14'
          fontFamily='body'
        >
          anúncios ativos
        </Text>
      </VStack>
    </HStack>
  );
}