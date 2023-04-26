import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Box, FlatList, HStack, Icon, Text } from "native-base";
import { useMemo, useState } from "react";
import { Switch, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { CategoryTag } from "./categoryTag";
import { Button } from "./Button";
import { THEME } from '../theme';
import { Checkbox } from './Checkbox';
// import Checkbox from 'expo-checkbox';

type Props = {
  sheetRef: React.MutableRefObject<BottomSheetMethods>
}

export function FilterProductSheet({ sheetRef = null }: Props) {
  const snapPoints = useMemo(() => ['70%'], []);

  const { colors } = THEME;

  const [categorySelected, setCategorySelected] = useState<number>(null);

  const [isChecked, setChecked] = useState(false);

  const [acceptTrade, setAcceptTrade] = useState(false);

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      style={{ padding: 24, backgroundColor: colors.gray[600] }}
    >
      <HStack alignItems='center' justifyContent='space-between' mb='6'>
        <Text
          color='gray.100'
          fontSize='20'
          fontFamily='heading'
        >
          Filtrar anúncios
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => sheetRef.current?.close()}
        >
          <Icon
            as={AntDesign}
            name="close"
            color='gray.400'
            size='6'
          />
        </TouchableOpacity>
      </HStack>

      <Box mb='6'>
        <Text
          color='gray.200'
          fontSize='14'
          fontFamily='heading'
          mb='2'
        >
          Condição
        </Text>
        {/* TODO, fazer uma flat list aq caso existam mais categorias, e dar a possibilidade de excluir filtros */}

        <FlatList
          data={[{ item: 'new', id: 1 }, { item: 'used', id: 2 }]}
          renderItem={({ item }) => (
            <CategoryTag
              category={item.item === 'new' ? 'new' : 'used'}
              canBeDeselected={categorySelected === item.id}
              onPress={() => setCategorySelected(prevState => prevState === item.id ? null : item.id)}
              px='3'
              py='2'
              mr='2'
            />
          )}
          horizontal
        />
      </Box>

      <Text
        color='gray.200'
        fontSize='14'
        fontFamily='heading'
      >
        Aceita troca?
      </Text>
      <Switch
        onValueChange={setAcceptTrade}
        value={acceptTrade}
        thumbColor={colors.blue[100]}
        trackColor={{ false: colors.gray[500], true: colors.blue.light }}
        style={{ alignSelf: 'flex-start' }}
      />

      {/* TODO fazer um switch aq */}
      <Text
        color='gray.200'
        fontSize='14'
        fontFamily='heading'
        mb='3'
        mt='3'
      >
        Meios de pagamento aceitos
      </Text>
      {/* TODO tenho q colocar tudo dentro de um form */}
      <Checkbox title='Boleto' />
      <Checkbox title='Pix' />
      <Checkbox title='Dinheiro' />
      <Checkbox title='Cartão de crédito' />
      <Checkbox title='Boleto bancário' />
      {/* <Checkbox
        style={{ margin: 8 }}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#4630EB' : undefined}
      /> */}
      {/* TODO fazer multis checkboxs */}
      <HStack space='2' mt='4'>
        <Button
          w='48%'
          type="gray"
          title="Resetar filtros"
        />
        <Button
          w='48%'
          type="black"
          title="Aplicar filtros"
        />
      </HStack>
    </BottomSheet>
  );
}