import React from 'react';
import { View } from 'react-native';
import { Center, Spinner, useTheme } from 'native-base';

export function Loading() {
  const {colors} = useTheme();

  return (
    <Center flex={1} bg='gray.100'>
      <Spinner color={colors.blue[100]}/>
    </Center>
  );
}