import { Box, Divider, FlatList, HStack, IIconProps, Icon, Text, VStack, useTheme } from "native-base";
import { Button } from "../components/Button";
import { HomeHeader } from "../components/HomeHeader";
import { AdvertisedProducts } from "../components/AdvertisedProducts";
import { InputSearch } from "../components/InputSearch";
import { CardForSale } from "../components/CardForSale";
import { CardForSaleType } from "../types/CardForSale";
import { useMemo, useRef, useState } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import { CategoryTag } from "../components/CategoryTag";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FilterProductSheet } from "../components/FilterProductSheet";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps, HomeNavigatorRoutesProps } from "../routes/app.routes";

export const EXAMPLE_PRODUCTS: CardForSaleType[] = [
	{
		id: '1',
		title: 'Tenis',
		price: '10,00',
		category: 'used'
	},
	{
		id: '2',
		title: 'Jorge',
		price: '25,00',
		category: 'new'
	},
	{
		id: '3',
		title: 'Julieta',
		price: '48,00',
		category: 'used'
	},
	{
		id: '4',
		title: 'Tenis',
		price: '38,00',
		category: 'new'
	},
	{
		id: '5',
		title: 'Jorge',
		price: '25,00',
		category: 'new'
	},
	{
		id: '6',
		title: 'Julieta',
		price: '918,00',
		category: 'used'
	},
]

export function Home() {
	const navigation = useNavigation<HomeNavigatorRoutesProps>();
	const bottomSheetRef = useRef<BottomSheet>(null);

	function handleOpenFiltersBottomSheet() {
		bottomSheetRef.current?.snapToIndex(0)
	}

	function handleNavigateToProductDetails() {
		navigation.navigate('AdvertiseDetailsScreen')
	}

	return (
		<VStack w='full' h='full' bg='gray.600' p='6'>
			<HomeHeader />

			<Text
				color='gray.300'
				fontSize='14'
				fontFamily='body'
				mt='8'
				mb='3'
			>
				Seus produtos anunciados para venda
			</Text>
			<AdvertisedProducts />

			<Text
				color='gray.300'
				fontSize='14'
				fontFamily='body'
				mt='8'
				mb='3'
			>
				Compre produtos variados
			</Text>
			<InputSearch onFiltersPress={handleOpenFiltersBottomSheet} />

			{/* TODO ver a parada de suavizar as bordas de cima da flat lsit */}
			<FlatList
				data={EXAMPLE_PRODUCTS}
				renderItem={({ item, index }) => (
					<CardForSale
						product={item}
						onPress={() => handleNavigateToProductDetails()}
						disabled={EXAMPLE_PRODUCTS.length === index}
					/>
				)}
				contentContainerStyle={{ paddingBottom: 60 }}
				showsVerticalScrollIndicator={false}
				horizontal={false}
				numColumns={2}
				mt='6'
			/>

			{/* TODO separar toda essa bottom shet em um component */}
			<FilterProductSheet
				sheetRef={bottomSheetRef}
			/>
		</VStack>
	);
}