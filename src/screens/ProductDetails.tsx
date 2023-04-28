import { Box, HStack, Text, VStack } from "native-base";
import { Header } from "../components/Header";
import { Image } from "native-base";
import { UserPhoto } from "../components/UserPhoto";
import ProductImagePng from '../assets/productImage.png';
import UserImagePng from '../assets/user.png';
import { CategoryTag } from "../components/CategoryTag";

export function ProductDetails() {
  return (
    <VStack w='full' h='full' bg='gray.700'>
      <Header
        goBack
      />
      <Image
        source={ProductImagePng}
        alt="Imagem do produto"
        w='full'
      />
      <Box px='6' py='2' flex={1}>
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

        <VStack flex={1}>
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

          {/*   TODO terminar de desenvolver os icones aq */}
          {/* TODO seria interessante colocar um scroll aq ao invbes dessa box em torno de todo esse conteúdo do anúncio */}
          <Text
            color='gray.200'
            fontSize='14'
            fontFamily='heading'
            numberOfLines={1}
            my='2'
          >
            Meios de pagamento:
          </Text>
          <Text color='gray.200' fontSize='14' fontFamily='body'>Boleto</Text>
          <Text color='gray.200' fontSize='14' fontFamily='body'>Pix</Text>
          <Text color='gray.200' fontSize='14' fontFamily='body'>Dinheiro</Text>
          <Text color='gray.200' fontSize='14' fontFamily='body'>Cartão de crédito</Text>
          <Text color='gray.200' fontSize='14' fontFamily='body'>Boleto bancário</Text>
        </VStack>
      </Box>
    </VStack>
  );
}