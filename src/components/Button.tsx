import React from 'react';
import { View } from 'react-native';
import { Button as NativeBaseButton, Center, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  type: 'blue' | 'gray' | 'black'
}

export function Button({ title, type, ...rest }: Props) {
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
      { ...rest }
    >
      <Text 
        color={
          type === 'blue' && 'gray.700' || 
          type === 'gray' && 'gray.200' ||
          type === 'black' && 'gray.700'
        } 
        fontFamily='heading' 
        fontSize='14'
      >
        {title} 
      </Text>
    </NativeBaseButton>
  );
}