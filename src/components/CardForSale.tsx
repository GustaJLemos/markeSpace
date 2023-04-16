import { TouchableOpacity } from 'react-native';
import { Box, HStack, Image, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";
import SaleImgExPng from '../assets/saleImgEx.png';
import UserExPng from '../assets/user.png';
import { CardForSaleType } from "../types/CardForSale";
import { CategoryTag } from './categoryTag';

// TODO colocar as tipagens
type Props = {
  product: CardForSaleType
}

export function CardForSale({ product: { title, price, category } }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        marginBottom: 24,
        marginRight: 48
      }}
    >
      <Box>
        {/* TODO colocar imagem aq */}
        <Image
          source={SaleImgExPng}
          alt="Imagem do usuário anuciante"
          rounded='md'
        />
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
          <CategoryTag
            category={category}
          />
        </HStack>
        {/* Todo criar os componentes de perfil e de usado */}
      </Box>

      <Text
        color='gray.200'
        fontSize='14'
        fontFamily='body'
      >
        {title}
      </Text>

      <Text
        color='gray.100'
        fontSize='12'
        fontFamily='heading'
      >
        R$
        <Text
          color='gray.100'
          fontSize='16'
          fontFamily='heading'
        >
          {price}
        </Text>
      </Text>
    </TouchableOpacity>
  )
}