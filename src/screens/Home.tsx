import { Box, Divider, FlatList, HStack, IIconProps, Icon, Text, VStack } from "native-base";
import { Button } from "../components/Button";
import { HomeHeader } from "../components/HomeHeader";
import { AdvertisedProducts } from "../components/AdvertisedProducts";
import { InputSearch } from "../components/InputSearch";
import { CardForSale } from "../components/CardForSale";
import { CardForSaleType } from "../types/CardForSale";
import { useMemo, useRef } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import { CategoryTag } from "../components/categoryTag";

const EXAMPLE_PRODUCTS: CardForSaleType[] = [
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
	const bottomSheetRef = useRef<BottomSheet>(null);

	const snapPoints = useMemo(() => ['25%', '50%'], []);

	function handleOpenFiltersBottomSheet() {

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
				renderItem={({ item }) => (
					<CardForSale product={item} />
				)}
				contentContainerStyle={{ paddingBottom: 60 }}
				showsVerticalScrollIndicator={false}
				horizontal={false}
				numColumns={2}
				mt='6'
			/>

			{/* TODO separar toda essa bottom shet em um component */}
			<BottomSheet
				ref={bottomSheetRef}
				index={1}
				snapPoints={snapPoints}
			>
				<HStack alignItems='center' justifyContent='space-between'>
					<Text
						color='gray.100'
						fontSize='20'
						fontFamily='heading'
					>
						Filtrar anúncios
					</Text>

					<Icon
						as={AntDesign}
						color='gray.400'
						size='6'
					/>
				</HStack>

				<Text
					color='gray.200'
					fontSize='14'
					fontFamily='heading'
				>
					Condição
				</Text>
				{/* TODO, fazer uma flat list aq pra mostrar as condições do filtro, e dar a possibilidade de excluir filtros */}
				<CategoryTag
					category='new'
				/>

				<Text
					color='gray.200'
					fontSize='14'
					fontFamily='heading'
				>
					Aceita troca?
				</Text>
				{/* TODO fazer um switch aq */}

				<Text
					color='gray.200'
					fontSize='14'
					fontFamily='heading'
				>
					Meios de pagamento aceitos
				</Text>
				{/* TODO fazer multis checkboxs */}
				<Button
					type="gray"
					title="Resetar filtros"
				/>
				<Button
					type="black"
					title="Aplicar filtros"
				/>
			</BottomSheet>
		</VStack>
	);
}