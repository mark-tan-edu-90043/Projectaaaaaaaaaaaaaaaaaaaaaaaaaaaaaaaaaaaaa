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

export default function Title({ navigation }) {

    const handlePlay = () => {
        navigation.navigate('Loading');
    };

    return(
        <View>
            <Image source={require('../assets/logocropped.png')} style={styles.logo} />
            <Text style={styles.titleText}>Linked 4</Text>
            <Text style={styles.subTitle}>By DropDotDynamics</Text>
            <TouchableOpacity style={styles.button} onPress={handlePlay}>
                <Text style={styles.buttonText}>Play!</Text>
            </TouchableOpacity>
        </View>
        
    )
};

const styles = StyleSheet.create ({
    logo: {
        marginTop: 50,
        height: 150,
        width: 150,
        alignSelf: 'center',
    },
    titleText: {
        fontFamily: 'Jua-Regular',
        fontSize: 50,
        color: 'white',
        alignSelf: 'center',
      
    },
    subTitle: {
        fontFamily: 'Jua-Regular',
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
    }, //Yes, Yes. I should have incorporated it all in an external stylesheet. Woohoo repetition
    button: {
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: '#393d74',
        padding: 10,
        borderRadius: 5,
        borderColor: '#ffffff',
        borderWidth: 2,
        width: 100,
        alignSelf: 'center',
      },  
      buttonText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
      },
});