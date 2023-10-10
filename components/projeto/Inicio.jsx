import React from 'react';
import { View, Text, Image, Button, StyleSheet, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const Inicio = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Swiper style={style.carrossel}
                loop={true}
                showsPagination={true}
                dotStyle={{ backgroundColor: 'rgba(23, 110, 48, 0.2)' }}
                activeDotStyle={{ backgroundColor: 'rgba(43, 163, 37, 0.6)' }}
            >
                <View style={style.container}>
                    <Text style={style.texto}>Voce busca desenvolvimento pessoal e enriquecimento cultural?</Text>
                    <Image style={{width: 300, height: 300, borderRadius: 50}} source={{uri: 'https://i.pinimg.com/564x/4c/97/46/4c974673155b7839591cd25fe9d6d353.jpg'}} />
                </View>
                <View style={style.container}>
                    <Text style={style.texto}>Ampliar seus horizontes e experienciar novas perspectivas</Text>
                    <Image style={{width: 300, height: 300, borderRadius: 50}} source={{uri: 'https://i.pinimg.com/236x/23/86/49/23864966deccbd60da4808ef0fbfd319.jpg'}}/>
                </View>
                <View style={style.container} >
                    <Text style={style.texto}>Comece sua nova jornada!</Text>
                    <Image style={{width: 300, height: 300, borderRadius: 50}} source={{uri: 'https://i.pinimg.com/564x/11/36/19/113619392b8d26751ee0384855ab34c4.jpg'}}/>
                </View>
            </Swiper>
            <Button
                title="Iniciar"
                onPress={() => navigation.navigate("Tela1")}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default Inicio;
