import React from 'react';
import { View } from 'react-native';
import { Input as NativeBaseInput, IInputProps } from 'native-base';

type Props = IInputProps & {}

export function Input({ ...rest }: Props) {
  return (
    <NativeBaseInput 
      w='full' 
      px='4'
      py='3'
      mt='4'
      color='gray.400'
      placeholderTextColor='gray.400' 
      fontFamily='body' 
      fontSize='16' 
      rounded='md'
      bgColor='gray.700'
      borderColor='gray.700'
      _focus={{
        bg:'gray.700',
        borderWidth: 1,
        borderColor: "blue.light"
      }}
      { ...rest }
    />
  );
}