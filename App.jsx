/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Touchable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { useNavigation } from '@react-navigation/native';
import Game from './pages/Game';
import styles from './styles';
import Title from './pages/Title';
import Loading from './pages/Loading';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createStackNavigator(); 

  const navTheme = DefaultTheme;
  navTheme.colors.background = '#393d74';

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName='Game'>
          <Stack.Screen name="Game" component={Game} options={{ headerShown: false }}/>
          <Stack.Screen name="Title" component={Title} options={{ headerShown: false }}/>
          <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
