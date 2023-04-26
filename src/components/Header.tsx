import { HStack, Icon, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { IconProps } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

type RightIconProps = {
  icon?: JSX.Element;
  iconName?: string;
  onIconPress: () => void;
}

type Props = {
  title: string;
  goBack?: boolean;
  rightIcon?: RightIconProps;
}

export function Header({ title, goBack = true, rightIcon = {} as RightIconProps }: Props) {
  return (
    <HStack w='full' bg='gray.700'>
      {goBack && (
        <TouchableOpacity onPress={() => console.log('voltando para trás')} activeOpacity={0.8}>
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
        flex={1}
      >
        {title}
      </Text>
      {rightIcon && (
        <TouchableOpacity onPress={rightIcon.onIconPress} activeOpacity={0.8}>
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