import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff00',
        // margin: 20, 
        padding: 20,
        flex: 1,
        borderRadius: 20,
    },
    titulo: {
        fontSize: 30,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
    },
    texto: {
        fontSize: 18,
        width: '100%',
        textAlign: 'center',
    },
    texto2: {
        fontSize: 14,
        width: '100%',
        textAlign: 'right',
        color: '#F00',
        marginTop: 50,
    },
});

export default styles;
