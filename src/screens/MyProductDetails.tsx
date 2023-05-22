import { Box, HStack, Image, ScrollView, StatusBar, Text, VStack } from "native-base";
import { THEME } from "../theme";
import MyProductImagePng from '../assets/myProductImage.png'
import { UserPhoto } from "../components/UserPhoto";
import UserImagePng from '../assets/user.png';
import { PaymentOptions } from "../components/PaymentOptions";
import { Button } from "../components/Button";
import { Power, Tag, TrashSimple } from 'phosphor-react-native'
import { AntDesign } from '@expo/vector-icons';
import { Header } from "../components/Header";
import { PencilSimpleLine } from "phosphor-react-native";
import { CategoryTag } from "../components/CategoryTag";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

// TODO passar o preview por rouyte params, e o active ou desactive pegar do back
type Props = {
  interfacetype: 'preview' | 'actived' | 'desactived'
}

export function MyProductDetails({ interfacetype = 'preview' }: Props) {
  const { colors } = THEME;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    // TODO pegar as info q ver do anúncio, se tá ativo ou n
  })

  const renderHeader = () => {
    if (interfacetype === 'preview') {
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
        </>
      )
    }

    // TODO tirar a tab navigator daq

    if (interfacetype === 'actived' || 'desactived') {
      return (
        <Header
          title="Detalhes do produto"
          rightIcon={{
            icon: <PencilSimpleLine size={22} color={colors.gray[100]} />,
            onIconPress: () => console.log('Navegando até a edição')
          }}
          goBack
        />
      )
    }
  }

  const renderFooter = () => {
    if (interfacetype === 'preview') {
      return (
        <HStack
          space='2'
        >
          <Button
            type="gray"
            title="Voltar e editar"
            icon={<AntDesign name="arrowleft" size={18} color={colors.gray[200]} />}
            w='48%'
            alignSelf='center'
            onPress={handleGoBack}
          />

          <Button
            type="blue"
            title="Publicar"
            icon={<Tag size={18} color={colors.gray[600]} />}
            w='48%'
            alignSelf='center'
          />
        </HStack>
      )
    }

    if (interfacetype === 'actived' || 'desactived') {
      return (
        <>
          <Button
            type={interfacetype === 'actived' ? "black" : "blue"}
            title={interfacetype === 'actived' ? "Desativar anúncio" : "Reativar anúncio"}
            icon={<Power size={18} color={colors.gray[600]} />}
            alignSelf='center'
          />

          <Button
            type="gray"
            title="Excluir anúncio"
            icon={<TrashSimple size={18} color={colors.gray[300]} />}
            alignSelf='center'
          />
        </>
      )
    }
  }

  return (
    <VStack w='100%' h='100%'>
      {renderHeader()}
      <Image
        source={MyProductImagePng}
        alt='Imagem do produto'
        style={{ width: '100%' }}
      />

      {/* TODO colocar uma scrollView funcional */}
      <Box flex={1} px='2' pt='4'>
        <ScrollView w='100%' h='100%' showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 36 }}>
          <HStack alignItems='center' justifyContent='center'>
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
          <CategoryTag category="new" w='12' mb='6' />

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
        </ScrollView >
        {renderFooter()}
      </Box>
    </VStack >
  );
}