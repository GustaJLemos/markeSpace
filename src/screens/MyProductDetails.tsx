import { HStack, Image, ScrollView, StatusBar, Text, VStack } from "native-base";
import { THEME } from "../theme";
import MyProductImagePng from '../assets/myProductImage.png'
import { UserPhoto } from "../components/UserPhoto";
import UserImagePng from '../assets/user.png';
import { CategoryTag } from "../components/CategoryTag";
import { PaymentOptions } from "../components/PaymentOptions";
import { Button } from "../components/Button";
import { Tag } from 'phosphor-react-native'
import { AntDesign } from '@expo/vector-icons';

export function MyProductDetails() {
  const { colors } = THEME;

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.blue.light}
        translucent
      />
      <VStack w='full' bg='blue.light' py='8'>
        <Text
          color='gray.700'
          fontFamily='heading'
          fontSize='16'
          textAlign='center'
        >
          Pré visualização do anúncio
        </Text>
        <Text
          color='gray.700'
          fontFamily='body'
          fontSize='14'
          textAlign='center'
        >
          É assim que seu produto vai aparecer!
        </Text>
      </VStack>
      <Image
        source={MyProductImagePng}
        alt='Imagem do produto'
        style={{ width: '100%' }}
      />
      <VStack h='full' px='4' bg='gray.600'>

        {/* TODO colocar uma scrollView funcional */}
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

        <HStack
          space='2'
        >
          <Button
            type="gray"
            title="Voltar e editar"
            icon={<AntDesign name="arrowleft" size={18} color={colors.gray[200]} />}
            w='48%'
            alignSelf='center'
          />

          <Button
            type="blue"
            title="Publicar"
            icon={<Tag size={18} color={colors.gray[600]} />}
            w='48%'
            alignSelf='center'
          />
        </HStack>
      </VStack >
    </>
  );
}