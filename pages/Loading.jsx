import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoadingAnimation from '../components/loadingAnimation';

export default function Loading() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Game');
    }, 4000);
    
    
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <>
        <LoadingAnimation />
    </>
  );
}
