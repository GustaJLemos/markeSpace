import { Box, HStack, ScrollView, Text, VStack, useTheme } from "native-base";
import { Header } from "../components/Header";
import { Image } from "native-base";
import { UserPhoto } from "../components/UserPhoto";
import ProductImagePng from '../assets/productImage.png';
import UserImagePng from '../assets/user.png';
import { CategoryTag } from "../components/CategoryTag";
import { PaymentOptions } from "../components/PaymentOptions";
import { Button } from "../components/Button";
import { WhatsappLogo } from 'phosphor-react-native';

export function ProductDetails() {
  const { colors } = useTheme();

  return (
    <VStack w='full' h='full' bg='gray.600'>
      <Header
        goBack
        title="Detalhes do produto"
      />
      <Image
        source={ProductImagePng}
        alt="Imagem do produto"
        w='full'
      />
      <ScrollView px='6' py='2' flex={1}>
        <HStack alignItems='center' justifyContent='center' mb='6'>
          <UserPhoto
            source={UserImagePng}
            showPencil={false}
            size='7'
          />
          <Text
            color='gray.100'
            fontSize='14'
            fontFamily='body'
            ml='1'
            numberOfLines={1}
            flex={1}
          >
            Gustavo Mendes
          </Text>
        </HStack>
        <CategoryTag category="new" w='12' />

        <VStack flex={1} mb='20'>
          <Text
            color='gray.100'
            fontSize='20'
            fontFamily='heading'
            numberOfLines={1}
            my='2'
          >
            Bicicleta
          </Text>
          <Text
            color='gray.200'
            fontSize='14'
            fontFamily='body'
            mb='2'
          >
            Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
          </Text>

          <Text
            color='gray.200'
            fontSize='14'
            fontFamily='heading'
            numberOfLines={1}
            my='2'
          >
            Aceita troca?
            <Text fontFamily='body'> Sim</Text>
          </Text>

          <Text
            color='gray.200'
            fontSize='14'
            fontFamily='heading'
            numberOfLines={1}
            my='2'
          >
            Meios de pagamento:
          </Text>
          <PaymentOptions option="boleto" />
          <PaymentOptions option="pix" />
          <PaymentOptions option="dinheiro" />
          <PaymentOptions option="credito" />
          <PaymentOptions option="deposito" />
        </VStack>
      </ScrollView>

      <Box>
        <HStack
          bg='gray.700'
          w='full'
          px='6'
          pb='4'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text
            color='blue.default'
            fontSize='14'
            fontFamily='heading'
            pt='2'
          >
            R$ <Text fontSize='24'>120,00</Text>
          </Text>

          {/* TODO fazer função aq */}
          {/* TODO tirar a tab navigtator aq */}
          <Button
            type="blue"
            title="Entrar em contato"
            icon={<WhatsappLogo size={20} weight='fill' color={colors.gray[600]} />}
            w='48'
            alignSelf='center'
          />
        </HStack>
      </Box>
    </VStack>
  );
}