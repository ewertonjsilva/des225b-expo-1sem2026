import { View, Text, Image } from 'react-native';

import styles from './styles';

import Card from './card';
import mockup from './mockup';

function RevisaoAtv02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Revisao Atividade 2</Text>

            {
                mockup.map(item => <Card
                titulo={item.titulo}
                descricao={item.descricao}
                preco={item.preco} 
                img={item.img}
            />)
            }                    

        </View>
    );
}

export default RevisaoAtv02;