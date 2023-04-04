import { Box, Text, VStack, Button as NativeBaseButton, Center, ScrollView } from 'native-base';
import React, { useEffect } from 'react';
import LogoSvg from '../assets/logo.svg';
import { UserPhoto } from '../components/UserPhoto';
import userPhotoPng from '../assets/avatar.png';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

{/* 
  TODO 
- fazer função de visualizar senha 
- implementar validações nos campos dos inputs
- implementar navegação
- adicionar aquele scroll quando abre o treclado
- ver pq esse background n ta funfando
*/}

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg='gray.600'>
        <Center>
          <LogoSvg width={80} height={80} />
          <Text fontSize='20' fontFamily='heading' color='gray.100'>
            Boas vindas!
          </Text>
          <Text fontSize='14' fontFamily='body' color='gray.200'>
            Crie sua conta e use o espaço para comprar {'\n'} itens variados e vender seus produtos
          </Text>
        </Center>
        <Box mt={6} flex={1} px='12' >
          <Center>
            <UserPhoto
              source={userPhotoPng}
            />
          </Center>

          <Input placeholder='Nome' />
          <Input placeholder='E-mail' />
          <Input placeholder='Telefone' />
          <Input placeholder='Senha' secureTextEntry />
          <Input placeholder='Confirmar senha' secureTextEntry />

          <Button type='black' title='Criar' />

          <Center flex={1}>
            <Text color='gray.200' alignSelf='center' fontFamily='body' fontSize='14'>
              Já tem uma conta?
            </Text>
            <Button type='gray' title='Ir para o login' />
          </Center>
        </Box>
      </VStack>
    </ScrollView>
  );
}