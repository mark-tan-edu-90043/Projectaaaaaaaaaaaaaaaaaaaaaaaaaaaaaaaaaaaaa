import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import Board from './components/Board';
import Slot from './components/Board';

export default function Game() {

    const placeHolder = () => {

    };

    return(
      <View style={styles.container}>
        <Board />
        <TouchableOpacity style={styles.button} onPress={placeHolder}>
          <Text style={styles.buttonText}>Return Home</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393d74',
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#393d74',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 2,
  },  
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
});