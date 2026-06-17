// file: des225b-expo-1sem2026/src/atividades/atv09/styles.js

import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const style = StyleSheet.create({
    square: {
        backgroundColor: '#fff',
        borderWidth: RFValue(1),
        borderColor: '#999',
        fontWeight: 'bold',
        height: RFValue(64),
        width: RFValue(64),
        alignItems: 'center',
        justifyContent: 'center'
    },
    mensagem: {
        fontSize: RFValue(34),
    },
    status: {
        marginBottom: RFValue(20),
        fontSize: RFValue(34),
    },
    game: {        
        flex: 1,
        backgroundColor: '#fff',
    },
    gameBoard: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    boardRow: {
        flexDirection: 'row',
    },
    historico: {
        fontSize: RFValue(18),
    },
    containerHistorico: {
        marginTop: RFValue(20),
        alignItems: 'center',
        height: '50%'
    },
    btnReiniciar: {
        backgroundColor: '#999',
        padding: RFValue(15),
        marginBottom: RFValue(10),
        borderRadius: RFValue(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: '#fafafa',
    },
});

export default style;