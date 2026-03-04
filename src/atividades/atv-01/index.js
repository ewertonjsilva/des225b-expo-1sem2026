import { View, Text } from 'react-native'; 

import styles from './styles';

function Atividade01 () {
    return(
        <View style={styles.container} >
            <Text style={styles.titulo} >Atividade 1</Text>
            <Text style={styles.texto}>
                Aula de React Native com Expo
            </Text>
            <Text style={styles.texto2}>Um texto qualquer a mais</Text>
        </View>
    );
}

export default Atividade01;