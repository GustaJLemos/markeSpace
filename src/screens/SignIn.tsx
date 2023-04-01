import { Box, Center, Heading, StatusBar, Text, useTheme, VStack } from 'native-base';

import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import LogoSvg from '../assets/logo.svg';
import MarketspaceSvg from '../assets/marketspace.svg';

{/* 
  TODO 
- fazer função de visualizar senha 
- fazer função de autenticação por biometria
- implementar validações nos campos dos inputs
- implementar navegação
*/}

export function SignIn() {
  const { colors } = useTheme();
  
  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={colors.gray[600]}
        translucent
      />
      <VStack w='full' h='full' bg='gray.700'>
        <VStack py='16' bg='gray.600' roundedBottomLeft='3xl' roundedBottomRight='3xl'>
          <Center>
            <LogoSvg style={{ marginBottom: 16 }} />
            <MarketspaceSvg />
            <Text fontFamily='body' color='gray.300' fontSize='sm' >
              Seu espaço de compra e venda
            </Text>
          </Center>
          <Box mt='16' px='12'>
            <Text color='gray.200' alignSelf='center' fontFamily='body' fontSize='14'>
              Acesse sua conta
            </Text>
            <Input placeholder='E-mail'/>
            <Input placeholder='Senha' secureTextEntry/>
            <Button type='blue' title='Entrar' />
          </Box>
        </VStack>

        <Center flex={1} px='12'>
          <Text color='gray.200' alignSelf='center' fontFamily='body' fontSize='14'>
            Ainda não tem acesso?
          </Text>
          <Button type='gray' title='Criar uma conta'/>
        </Center>
      </VStack>
    </>
  );
}