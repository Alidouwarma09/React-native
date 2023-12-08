import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const JeuxScreen = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const [level, setLevel] = useState(1);

  const handleCalculate = () => {
    const num = parseInt(number, 10); // Assurez-vous que le nombre est bien interprété comme entier
    if (num === 4) {
      setResult(`Bravo ! Niveau ${level} accompli.`);
      setLevel(level + 1);
    } else {
      setResult("Essayez à nouveau !");
    }
  };

  const handleNextLevel = () => {
    setNumber('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text>Écran Jeux</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un nombre "
        keyboardType="numeric"
        value={number}
        onChangeText={(text) => setNumber(text)}
      />
      <Button title="Valider" onPress={handleCalculate} />
      {result && (
        <>
          <Text>Résultat :</Text>
          <Text>{result}</Text>
        </>
      )}
      {level < 3 && (
        <Button title={`Passer au niveau ${level + 1}`} onPress={handleNextLevel} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});

export default JeuxScreen;
