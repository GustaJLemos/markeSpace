import { HStack, Text, VStack } from "native-base";
import { UserPhoto } from "../components/UserPhoto";
import userPng from "../assets/user.png";
import { Button } from "../components/Button";

export function Home() {
	return (
		<VStack w='full' h='full' bg='gray.600' p='6'>
			<HStack w='full' alignItems='center'>
				<UserPhoto
					source={userPng}
					size='60'
					showPencil={false}
				/>
				<Text
					color='gray.100'
					fontSize='16'
					fontFamily='body'
					ml='2'
					flex={1}
				>
					Boas vindas, {'\n'}
					<Text
						color='gray.100'
						fontSize='16'
						fontFamily='heading'
					>
						Gustavo!
					</Text>
				</Text>
				{/* TODO colocar icone nesse botão */}
				<Button type="black" title="Criar anúncio" flex={1} />
			</HStack>
		</VStack>
	);
}