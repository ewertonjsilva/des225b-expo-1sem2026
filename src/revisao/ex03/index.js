import { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo03_passos() {

    const [numero, setNumero] = useState(10);

    function handleMaisUm () {
        setNumero(numero + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis e State</Text>

            <View style={styles.botaoAlert}>
                <Button
                    title='Não clique'
                    color={'darkslategrey'}
                />
            </View>

            <Text style={styles.valor}>{numero}</Text>
            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleMaisUm()}
            >
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Exemplo03_passos;