import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AccueilScreen from './screens/AccueilScreen.js';
import CompteScreen from './screens/CompteScreen.js';
import ParametresScreen from './screens/ParametresScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const Connexion = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={AccueilScreen} />
      <Tab.Screen name="Compte" component={CompteScreen} />
      <Tab.Screen name="Paramètres" component={ParametresScreen} />
    </Tab.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={AccueilScreen} />
      <Tab.Screen name="Compte" component={CompteScreen} />
      <Tab.Screen name="Paramètres" component={ParametresScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
