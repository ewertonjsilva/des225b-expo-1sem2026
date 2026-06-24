import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../exemplos/listaExemplos';
import Exemplo1Screen from '../exemplos/ex01';
import Exemplo2Screen from '../exemplos/ex02';
import Exemplo3Screen from '../exemplos/ex03';

const Stack = createNativeStackNavigator();

export default function StackExemplos() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'tomato' },
                // headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Exemplo1" component={Exemplo1Screen} />
            <Stack.Screen
                name="Exemplo2"
                component={Exemplo2Screen}
                options={{ title: 'Exemplo 2' }}
            />
            <Stack.Screen
                name="Exemplo3"
                component={Exemplo3Screen}
            />
        </Stack.Navigator>
    );
}