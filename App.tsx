import React from 'react';
// import {Text, View} from 'react-native';
import CalculadoraScreens from './src/screens/CalculadoraScreens';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor="black" />
      <CalculadoraScreens />
    </SafeAreaView>
  );
};

export default App;


