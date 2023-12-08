import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AccueilScreen from './screens/AccueilScreen.js';
import JeuxScreen from './screens/JeuxScreen.js';
import ParametresScreen from './screens/ParametresScreen.js';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Button, Image, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator >
      
      <Tab.Screen 
        name="Accueil"
        component={AccueilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Jeux"
        component={JeuxScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Parametres "
        component={ParametresScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainTabNavigator} />
        </Stack.Navigator>
        <Image source={require('./assets/wally.png')} style={styles.profileImage} />
        <Text style={styles.userName}>Wally Darius</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 30,
    right: 0,
    margin: 10,
  },
  userName: {
    width: 70,
    height: 50, // Ajustez la hauteur en fonction de vos besoins
    borderRadius: 25,
    position: 'absolute',
    top: 80,
    right: 0,
    margin: 10,
    color: 'black', // Ajoutez la couleur du texte
    textAlign: 'center', // Centre le texte horizontalement dans le conteneur
    fontWeight: 'bold',
    flexDirection: 'row', // Ajoutez du style au texte si nécessaire
  },
});

export default AppNavigator;