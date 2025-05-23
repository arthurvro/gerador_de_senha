import React, { useState } from 'react';
import { Button, Input, VStack, Center, Heading } from 'native-base';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // TODO: integrar com backend Node
    /*
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) navigation.replace('Home');
    } catch (error) {
      console.error(error);
    }
    */
    navigation.replace('Home');
  };

  return (
    <Center flex={1} px={4} bg="white">
      <VStack space={4} w="100%">
        <Heading size="lg" textAlign="center">Faça seu login</Heading>
        <Input
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChangeText={setPassword}
        />
        <Button mt={2} onPress={handleLogin}>Entrar</Button>
      </VStack>
    </Center>
  );
}