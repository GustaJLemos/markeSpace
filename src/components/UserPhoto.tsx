import { Image, Center, IImageProps, useTheme } from 'native-base';
import React from 'react';
import { PencilSimpleLine } from 'phosphor-react-native';
import { ImageSourcePropType, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from '../theme';

type Props = IImageProps & {
  showPencil?: boolean;
}

export function UserPhoto({ size, showPencil = true, ...rest }: Props) {
  const { colors } = THEME;

  return (
    <Center
      w={size ? size : '24'}
      py='1'
    >
      <Image
        w={size}
        h={size}
        alt='Foto de perfil de usuário'
        rounded='full'
        borderWidth={2}
        bg='blue.light'
        {...rest}
      />
      {showPencil && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.button, { backgroundColor: colors.blue.light }]}
        >
          <PencilSimpleLine color='white' size={18} />
        </TouchableOpacity>
      )}
    </Center>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
})