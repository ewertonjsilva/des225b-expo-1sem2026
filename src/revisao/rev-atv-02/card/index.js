import { View, Text, Image } from 'react-native';

import styles from './styles';

function CardRevAtv2({ titulo, descricao, preco, img }) {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.imagem} />
            <View style={styles.containerItens}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.preco}>{preco}</Text>
            </View>
        </View>
    );
}

export default CardRevAtv2;