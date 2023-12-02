import React, { useEffect, useState, useRef } from 'react';
import { 
    View, 
    Animated, 
    Image, 
    Easing, 
    StyleSheet, 
    Text 
} from 'react-native';
import tips from './json/tips.json';

const LoadingAnimation = () => {
  const opacity1 = useRef(new Animated.Value(0)).current;
  const opacity2 = useRef(new Animated.Value(0)).current;
  const opacity3 = useRef(new Animated.Value(0)).current;
  const opacity4 = useRef(new Animated.Value(0)).current;

  const [randomTip, setRandomTip] = useState({});

  useEffect(() => {
    //Everyone likes loading tips, right?
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);

    const fadeInAnimation = (opacity, delay) =>
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        delay,
        useNativeDriver: true,
      });

    const animations = [
      fadeInAnimation(opacity1, 0),
      fadeInAnimation(opacity2, 1000),
      fadeInAnimation(opacity3, 2000),
      fadeInAnimation(opacity4, 3000),
    ];

    Animated.parallel(animations).start();

    return () => {
      animations.forEach((animation) => animation.stop());
    };
  }, [opacity1, opacity2, opacity3, opacity4, tips]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image source={require('../assets/p2_token.png')} style={[styles.image, { opacity: opacity1 }]} />
        <Animated.Image source={require('../assets/p2_token.png')} style={[styles.image, { opacity: opacity2 }]} />
        <Animated.Image source={require('../assets/p1_token.png')} style={[styles.image, { opacity: opacity3 }]} />
        <Animated.Image source={require('../assets/p2_token.png')} style={[styles.image, { opacity: opacity4 }]} />
      </View>
      <Text style={styles.loadingText}>Loading... </Text>
      <Text style={styles.tipsText}>{randomTip.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    height: 50,
    width: 50,
    marginHorizontal: 5,
  },
  loadingText: {
    fontFamily: 'Jua-Regular',
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 30,
  },
  tipsText: {
    fontFamily: 'Jua-Regular',
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});

export default LoadingAnimation;
