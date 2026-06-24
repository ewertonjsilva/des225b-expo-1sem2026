import { TouchableOpacity, Text } from 'react-native';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

export default function ListaExemplos() {

    const navigation = useNavigation();

    return (
        <div>
            <h1>Lista de Exemplos</h1>
            <Link screen="Exemplo1">Exemplo 1</Link>

            <Button screen="Exemplo2">Exemplo 2</Button>

            <TouchableOpacity onPress={() => navigation.navigate('Exemplo3')}>
                <Text>Exemplo 3</Text>
            </TouchableOpacity>
        </div>
    );
}