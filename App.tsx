/* eslint-disable prettier/prettier */
import React from 'react';
import Inicio from './components/projeto/Inicio';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import testeUseState from '../exemplo/components/tests/testeUseState';
import Tela1 from './components/projeto/Tela1';
import Tela2 from './components/projeto/Tela2';
import { ItemProvider } from './components/Context/ItemContext';

const navStack = createNativeStackNavigator();

const App = () => {
    return (
        <ItemProvider>
        <NavigationContainer>
            <navStack.Navigator>
                <navStack.Screen name='Inicio' component={Inicio} />
                <navStack.Screen name='Tela1' component={Tela1} />
                <navStack.Screen name='Tela2' component={Tela2} />
            </navStack.Navigator>
        </NavigationContainer>
        </ItemProvider>
    );
};

export default App;