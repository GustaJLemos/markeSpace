import { Image, IImageProps, Center } from 'native-base';
import React from 'react';
import { PencilSimpleLine } from 'phosphor-react-native';

type Props = IImageProps & {}

export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Center>
      <Image 
        w={size}
        h={size}
        rounded='full'
        borderWidth={2}
        bg='blue.light'
        { ...rest }
      />
      <Center 
        w='10' 
        h='10' 
        rounded='full' 
        bg='blue.light' 
        position='absolute' 
      >
        <PencilSimpleLine color='white'/>
      </Center>
    </Center>
  );
}