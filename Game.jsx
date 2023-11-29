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
import styles from './styles';

import Board from './components/Board';
import Slot from './components/Board';

export default function Game() {
    return(
            <Board />
    )
}