import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 

import { NavigationContainer } from '@react-navigation/native';

import StackExemplos from './src/routes/stackExemplos';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StackExemplos />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00290a', 
    padding: 16, 
    // alignItems: 'center',
    // justifyContent: 'center',
  }, 
});
