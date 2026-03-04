import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';

import Atividade01 from './src/atividades/atv-01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade01 />
      <StatusBar style="auto" />
    </View>
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
