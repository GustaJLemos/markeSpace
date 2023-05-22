import { HStack, Text } from "native-base";
import { UserPhoto } from "./UserPhoto";
import userPng from "../assets/user.png";
import { Button } from "./Button";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigatorRoutesProps } from "../routes/app.routes";

export function HomeHeader() {
  const navigation = useNavigation<HomeNavigatorRoutesProps>();

  function handleNavigateToAddNewAdvertise() {
    navigation.navigate('CreateAdvertiseScreen')
  }

  return (
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
      <Button type="black" title="Criar anúncio" iconName="add" flex={1} onPress={handleNavigateToAddNewAdvertise} />
    </HStack>
  );
}