import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import redToken from '../assets/red token.png'; // Update the path based on your file structure
import blackToken from '../assets/black token.png'; // Update the path based on your file structure

const Slot = ({ ch, y, x }) => {
  return (
    <View style={styles.slot} key={`${y}-${x}`}>
      {ch && (
        <Image
          source={ch === 'X' ? redToken : blackToken}
          style={styles.token}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  slot: {
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  token: {
    width: '100%',
    height: '100%',
  },
});

export default Slot;
