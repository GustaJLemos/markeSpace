import { Box, FlatList, HStack, Text, VStack, Select, useTheme } from "native-base";
import { Header } from "../components/Header";
import { EXAMPLE_PRODUCTS } from "./Home";
import { CardForSale } from "../components/CardForSale";
import SelectDropdown from 'react-native-select-dropdown'
import { MaterialIcons } from '@expo/vector-icons';

const ADVERTISE_OPTIONS = ['Todos', 'Novos', 'Usados', 'Favoritos']

export function MyAdvertises() {
  const { colors } = useTheme();

  return (
    <VStack w='full' h='full' bg='gray.600'>
      <Header
        goBack={false}
        title="Meus anúncios"
        rightIcon={{ iconName: 'add', onIconPress: () => console.log('adicionar anuncio') }}
      />

      <Box px='6' py='2'>
        <HStack
          w='full'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text
            color='gray.200'
            fontFamily='body'
            fontSize='14'
          >
            9 Anúncios
          </Text>

          <SelectDropdown
            data={ADVERTISE_OPTIONS}
            defaultValue={ADVERTISE_OPTIONS[0]}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            renderDropdownIcon={() => {
              return <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color={colors.gray[300]}
              />
            }}
            dropdownStyle={{ borderRadius: 8 }}
            buttonTextStyle={{ color: colors.gray[300] }}
            buttonStyle={{ backgroundColor: colors.gray[700], borderWidth: 1, borderRadius: 16, borderColor: colors.gray[500] }}
          />
        </HStack>

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