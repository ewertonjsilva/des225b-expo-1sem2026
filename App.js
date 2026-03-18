import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex01';
import Exemplo02 from './src/exemplos/ex02';

import Atividade01 from './src/atividades/atv01';
import Atividade02 from './src/atividades/atv02';

import RevisaoAtv02 from './src/revisao/rev-atv-02';

export default function App() {
  return (
    <View style={styles.container}>
      <RevisaoAtv02 />
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
