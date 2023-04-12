import React from 'react';
import { View } from 'react-native';
import { Button as NativeBaseButton, Center, IButtonProps, Text, IIconProps, Icon, HStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

type Props = IButtonProps & {
  title: string;
  type: 'blue' | 'gray' | 'black',
  iconName?: string,
}

export function Button({ title, type, iconName = '', ...rest }: Props) {

  const selectFontColorByType = () => {
    let selectedColor: string;
    switch (type) {
      case 'blue':
        selectedColor = 'gray.700';
        break;
      case 'gray':
        selectedColor = 'gray.200';
        break;
      case 'black':
        selectedColor = 'gray.700';
        break;
      default:
        selectedColor = 'white'
        break;
    }
    return selectedColor;
  }

  return (
    <NativeBaseButton
      w='full'
      rounded='md'
      bg={
        type === 'blue' && 'blue.light' ||
        type === 'gray' && 'gray.500' ||
        type === 'black' && 'gray.100'
      }
      mt='4'
      py='3'
      px='1'
      _pressed={{
        bg: type === 'blue' && 'blue.default' ||
          type === 'gray' && 'gray.400' ||
          type === 'black' && 'gray.200'
      }}
      {...rest}
    >
      <HStack
        alignItems='center'
        justifyContent='center'
        space='1'
      >
        {iconName && <Icon as={MaterialIcons} name={iconName} color={selectFontColorByType()} />}
        <Text
          color={selectFontColorByType()}
          fontFamily='heading'
          fontSize='14'
        >
          {title}
        </Text>
      </HStack>
    </NativeBaseButton>
  );
}