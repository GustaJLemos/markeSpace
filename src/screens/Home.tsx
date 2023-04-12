import { Box, HStack, IIconProps, Text, VStack } from "native-base";
import { Button } from "../components/Button";
import { HomeHeader } from "../components/HomeHeader";
import { AdvertisedProducts } from "../components/advertisedProducts";

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
		</VStack>
	);
}