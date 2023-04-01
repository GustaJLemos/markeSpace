import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../theme';

type Props = {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NativeBaseProvider theme={THEME}>
        <SafeAreaView>
          {children}
        </SafeAreaView>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}