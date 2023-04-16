import { Box, Divider, FlatList, HStack, IIconProps, Text, VStack } from "native-base";
import { Button } from "../components/Button";
import { HomeHeader } from "../components/HomeHeader";
import { AdvertisedProducts } from "../components/AdvertisedProducts";
import { InputSearch } from "../components/InputSearch";
import { CardForSale } from "../components/CardForSale";
import { CardForSaleType } from "../types/CardForSale";

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
			<InputSearch />

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
		</VStack>
	);
}