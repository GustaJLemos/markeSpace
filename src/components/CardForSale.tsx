import { Box, Image, Text, VStack } from "native-base";

export function CardForSale() {
  return (
    <VStack>
      <Box>
        {/* TODO colocar imagem aq */}
        <Image />
        {/* Todo criar os componentes de perfil e de usado */}
      </Box>

      <Text
        color='gray.200'
        fontSize='14'
        fontFamily='body'
      >
        Tênis vermelho
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
          59,90
        </Text>
      </Text>
    </VStack>
  )
}