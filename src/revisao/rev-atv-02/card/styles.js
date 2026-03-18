import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderWidth: RFPercentage(0.5),
        borderColor: 'darkslategrey',
        padding: RFPercentage(1.5),
        borderRadius: RFPercentage(1.5),
        width: '90%',
        alignItems: 'center',
        marginBottom: RFPercentage(1),
    },
    titulo: {
        fontSize: RFPercentage(3.3),
        fontWeight: 'bold',
        color: 'darkslategrey',
    },
    descricao: {
        fontSize: RFPercentage(2),
        color: '#222',
    },
    preco: {
        fontSize: RFPercentage(3),
        color: '#222',
        fontWeight: 'bold',
    },
    imagem: {
        height: RFPercentage(16), 
        // width: RFPercentage(10),  
        width: '25%',
        resizeMode: 'contain',
    }, 
    containerItens: {
        width: '70%',
    },
});

export default styles;