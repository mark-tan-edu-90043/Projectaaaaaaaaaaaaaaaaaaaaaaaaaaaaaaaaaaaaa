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

import Board from '../components/Board';

export default function Game({navigation}) {

  const handleGoHome = () => {
    navigation.navigate('Title');
  };

    return(
      <View style={styles.container}>
        <Board />
        <TouchableOpacity style={styles.button} onPress={handleGoHome}>
          <Text style={styles.buttonText}>Return Home</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
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
    width: 200,
    alignSelf: 'center'
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