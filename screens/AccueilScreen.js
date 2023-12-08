// AccueilScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccueilScreen = () => {
  const data = [
    { id: '1', image: require('../assets/wally.png') },
    { id: '2', image: require('../assets/wally.png') },
    { id: '3', image: require('../assets/wally.png') },
    { id: '4', image: require('../assets/wally.png') },
    { id: '5', image: require('../assets/wally.png') },
    { id: '6', image: require('../assets/wally.png') },
  ];
  const renderItem = ({ item }) => (
    <Image source={item.image} style={styles.item} />
  );


  return (
    <View style={styles.container}>
      <Text>Écran d'Accueil</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator= {false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
});

export default AccueilScreen;
