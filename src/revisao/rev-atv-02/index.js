import { View, Text, Image } from 'react-native';

import styles from './styles';

import amarela from '../../../assets/brasilAmarela.png';
import azul from '../../../assets/brasilAzul.jpg';
import branco from '../../../assets/brasilBranco.png';
import preta from '../../../assets/brasilPreta.jpg';

import Card from './card';

function RevisaoAtv02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Revisao Atividade 2</Text>

            <Card
                titulo={'Camiseta Amarela'}
                descricao={'Camisa principal da seleção.'}
                preco={'R$ 499,00'} 
                img={amarela}
            />
            <Card
                titulo={'Camiseta Azul'}
                descricao={'Camisa número dois.'}
                preco={'R$ 499,00'}
                img={azul}
            />
            <Card
                titulo={'Camiseta Preta'}
                descricao={'Camisa homenagem.'}
                preco={'R$ 399,00'}
                img={preta}
            />
            <Card
                titulo={'Camiseta Branca'}
                descricao={'Camisa vintage.'}
                preco={'R$ 300,00'}
                img={branco}
            />

        </View>
    );
}

export default RevisaoAtv02;