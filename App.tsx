import { Box, NativeBaseProvider, StatusBar, useTheme } from 'native-base';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Providers } from './src/contexts/Providers';
import { useFonts, Karla_700Bold, Karla_400Regular } from '@expo-google-fonts/karla';
import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';
import { SignUp } from './src/screens/SignUp';
import { Home } from './src/screens/Home';
import { ProductDetails } from './src/screens/ProductDetails';
import { MyAdvertises } from './src/screens/MyAdvertises';
import { CreateAdvertise } from './src/screens/CreateAdvertise';
import { MyProductDetails } from './src/screens/MyProductDetails';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <Providers>
      {fontsLoaded ? (
        <MyProductDetails interfacetype='preview' />
      ) : <Loading />}
    </Providers>
  );
}
