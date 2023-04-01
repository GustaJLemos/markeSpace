import { Box, Text, VStack, Button as NativeBaseButton, Center } from 'native-base';
import React from 'react';
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
*/}

export function SignUp() {
  return (
    <VStack w='full' h='full' bg='gray.600'>
      <Center>
        <LogoSvg width={80} height={80}/>
        <Text fontSize='20' fontFamily='heading' color='gray.100'>
          Boas vindas!  
        </Text>
        <Text fontSize='14' fontFamily='body' color='gray.200'>
          Crie sua conta e use o espaço para comprar {'\n'} itens variados e vender seus produtos
        </Text>
      </Center>
      <Box mt='8' flex={1} px='12' >
        <UserPhoto 
          source={userPhotoPng}
          alt='Foto de perfil de usuário'
        />

        <Input placeholder='Nome'/>
        <Input placeholder='E-mail'/>
        <Input placeholder='Telefone'/>
        <Input placeholder='Senha' secureTextEntry/>
        <Input placeholder='Confirmar senha' secureTextEntry/>

        <Button type='blue' title='Criar' />

        <Center flex={1}>
          <Text color='gray.200' alignSelf='center' fontFamily='body' fontSize='14'>
            Já tem acesso?
          </Text>
          <Button type='gray' title='Ir para o login'/>
        </Center>
      </Box>
    </VStack>
  );
}