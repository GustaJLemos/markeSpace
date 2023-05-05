import { Box, FlatList, VStack } from "native-base";
import { Header } from "../components/Header";
import { EXAMPLE_PRODUCTS } from "./Home";
import { CardForSale } from "../components/CardForSale";

export function MyAdvertises() {
  return (
    <VStack w='full' h='full' bg='gray.600'>
      <Header
        goBack={false}
        title="Meus anúncios"
        rightIcon={{ iconName: 'add', onIconPress: () => console.log('adicionar anuncio') }}
      />

      {/* TODO fazer negócio aq de núnciosn */}
      <Box px='6'>
        <FlatList
          data={EXAMPLE_PRODUCTS}
          renderItem={({ item }) => (
            <CardForSale
              product={item}
              onPress={() => console.log('navegue até o item selecionado')}
              disabled={EXAMPLE_PRODUCTS.length === Number(item.id)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          mt='6'
        />
      </Box>
    </VStack>
  );
}