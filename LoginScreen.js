import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('Connexion resussi!');
      // Naviguez vers votre écran d'accueil ou effectuez d'autres actions nécessaires après la connexion.
    } catch (error) {
      console.error('Connexion Impossible', error.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={(text) => setEmail(text)} />

      <Text>Password:</Text>
      <TextInput secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />

      <Button title="Connecter" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
