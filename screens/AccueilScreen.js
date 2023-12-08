// AccueilScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccueilScreen = () => {
  const navigation = useNavigation();

  const goToJeuxScreen = () => {
    navigation.navigate('Jeux');
  };

  return (
    <View>
      <Text>Etes-vous pret pour Jouer ?</Text>
      <Button title="Jouer" onPress={goToJeuxScreen} />
    </View>
  );
};

export default AccueilScreen;
