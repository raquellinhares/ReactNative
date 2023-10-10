import { View, Text, Button, FlatList, StyleSheet, TouchableHighlight, Image, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useItem } from '../Context/ItemContext';

const Produtos = [
  {
    id: 1,
    pais: "Australia",
    valor: "R$ 7500",
    img: "https://imgmd.net/images/v1/guia/1698641/australia-78-cat.jpg",
    descricao:"Terra de beleza natural única, a Austrália encanta com a Grande Barreira de Coral, vida selvagem icônica e cidades cosmopolitas."
  },
  {
    id: 2,
    pais: "Canada",
    valor: "R$ 5000",
    img: "https://fronteiras.cvccorp.com.br/wp-content/uploads/2021/06/Toronto-Canada-shutterstock_578065966.jpg",
    descricao:"Com paisagens vastas e modernas cidades multiculturais, o Canadá oferece uma experiência única, combinando natureza espetacular e urbanidade vibrante.",
  },
  {
    id: 3,
    pais: "Alemanha",
    valor: "R$ 6000",
    img: "https://www.travelclass.tur.br/uploads/2017/04/vista-aerea-de-colonia-alemanha-1275x850.jpg",
    descricao:" No coração da Europa, a Alemanha fascina com cidades históricas, paisagens pitorescas, uma rica herança cultural e uma fusão harmoniosa entre tradição e inovação.",
  },
];

type ItemProps = {
  pais: string,
  valor: string,
  img: string,
  onPress: () => void,
  isSelected: boolean,
  descricao: string,
}

const Item = ({ pais, valor, img, onPress, isSelected }: ItemProps) => (
  <TouchableHighlight
    style={[styles.item, isSelected ? styles.selectedItem : styles.item]}
    onPress={onPress}
  >
    <View style= {styles.lista}>
      <Image style={styles.imagem} source={{ uri: img }} />
      <Text style={styles.pais}>{pais}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  </TouchableHighlight>
)

const Tela1 = () => {
  const navigation = useNavigation();
  const { setItem, selectedItem } = useItem();

  const handleItemPress = (item: ItemProps) => {
    setItem(item);
  }

  const renderItem = ({ item }) => (
    <Item
      pais={item.pais}
      valor={item.valor}
      img={item.img}
      descricao={item.descricao}
      onPress={() => handleItemPress(item)}
      isSelected={item.pais === (selectedItem?.pais || '')}
    />
  );

  return (
    <SafeAreaView style= {styles.container}>
      <Text style={styles.enunciado}>Escolha sua nova experiencia</Text>
      <FlatList
        data={Produtos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        onPress={() => navigation.navigate('Tela2')}
        title={"Confirmar"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#B3D9C3',
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 1,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  selectedItem: {
    backgroundColor: '#6299e599',
  },
  pais: {
    fontSize: 22,
  },
  valor: {
    fontSize: 15,
  },
  enunciado: {
    fontSize: 25,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  imagem: {

    width: 345,
    height: 100,
  },
  lista: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 10,
  }
});

export default Tela1;