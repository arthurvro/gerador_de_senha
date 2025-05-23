import React from 'react';
import { Button, Text, Center, VStack, Heading } from 'native-base';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => navigation.replace('Login');

  return (
    <Center flex={1} px={4} bg="white">
      <VStack space={6} alignItems="center">
        <Heading>Bem-vindo!</Heading>
        <Text>Esta é a tela Home.</Text>
        <Button onPress={handleLogout}>Sair</Button>
      </VStack>
    </Center>
  );
}