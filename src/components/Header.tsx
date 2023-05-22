import { HStack, Icon, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { IconProps } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type RightIconProps = {
  icon?: JSX.Element;
  iconName?: string;
  onIconPress: () => void;
}

type Props = {
  title?: string;
  goBack?: boolean;
  rightIcon?: RightIconProps;
}

export function Header({ title, goBack = true, rightIcon = {} as RightIconProps }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HStack w='full' bg='gray.600' px='6' py='6' alignItems='center'>
      {goBack && (
        <TouchableOpacity onPress={handleGoBack} activeOpacity={0.6}>
          <Icon
            as={MaterialIcons}
            name='arrow-back'
            size='6'
            color='gray.100'
          />
        </TouchableOpacity>
      )}
      <Text
        color='gray.100'
        fontSize='20'
        fontFamily='heading'
        flex='1'
        textAlign='center'
        mx='2'
      >
        {title}
      </Text>
      {rightIcon && (
        <TouchableOpacity onPress={rightIcon.onIconPress} activeOpacity={0.6}>
          {rightIcon.icon ? rightIcon.icon : (
            <Icon
              as={MaterialIcons}
              name={rightIcon.iconName}
              size='6'
              color='gray.100'
            />
          )}
        </TouchableOpacity>
      )}
    </HStack>
  );
}