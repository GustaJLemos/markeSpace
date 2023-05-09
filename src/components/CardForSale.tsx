import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Box, HStack, Image, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";
import SaleImgExPng from '../assets/saleImgEx.png';
import UserExPng from '../assets/user.png';
import { CardForSaleType } from "../types/CardForSale";
import { CategoryTag } from './CategoryTag';

// TODO colocar as tipagens
type Props = TouchableOpacityProps & {
  product: CardForSaleType,
  disabled: boolean,
}

export function CardForSale({ product: { title, price, category }, disabled, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        marginBottom: 24,
        marginRight: 48
      }}
      {...rest}
    >
      {/* TODO continuar desenvolvendo o anúncio desativado */}
      <Image
        source={SaleImgExPng}
        alt="Imagem do usuário anuciante"
        rounded='md'
      />
      {disabled && (
        <Text
          flex={1}
          bg='gray.300'
          color='gray.700'
          fontSize='11'
          fontFamily='heading'
          position='absolute'
          bottom={50}
          borderRadius={16}
          p='1'
          ml='2'
        >
          ANÚNCIO DESATIVADO
        </Text>
      )}
      <HStack
        position='absolute'
        justifyContent='space-between'
        w='full'
        px='1'
      >
        <UserPhoto
          size='7'
          source={UserExPng}
          showPencil={false}
        />
      </HStack>
      <CategoryTag
        position='absolute'
        right={1}
        category={category}
      />
      {/* Todo criar os componentes de perfil e de usado */}

      <Text
        color={disabled ? 'gray.400' : 'gray.200'}
        fontSize='14'
        fontFamily='body'
      >
        {title}
      </Text>

      <Text
        color={disabled ? 'gray.400' : 'gray.100'}
        fontSize='12'
        fontFamily='heading'
      >
        R$
        <Text
          color={disabled ? 'gray.400' : 'gray.100'}
          fontSize='16'
          fontFamily='heading'
        >
          {price}
        </Text>
      </Text>
    </TouchableOpacity>
  )
}