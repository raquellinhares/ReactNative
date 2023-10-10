import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useItem } from '../Context/ItemContext';

const Tela2 = () => {
  const { selectedItem } = useItem();
  const [botaoClicado, setBotaoClicado] = useState(false);

  const handleBotaoPress = () => {
    // Inverte o estado do botão ao ser clicado
    setBotaoClicado(!botaoClicado);
  };

  return (
    <View>
      <Text style= {style.titulo} > Viagem Selecionada:</Text>
      {selectedItem && (
        <View>
          <Text style= {style.texto1} >Pais: {selectedItem.pais}</Text>
          <Text style= {style.texto1} >Valor: {selectedItem.valor}</Text>
          <Image style={style.imagem} source={{uri: selectedItem.img}} />
          <Text style= {style.texto2} > {selectedItem.descricao} </Text>
          <Button
         title={botaoClicado ? 'Viagem Selecionada!' : 'Selecionar Viagem'}
         onPress={handleBotaoPress}
         color={botaoClicado ? 'green' : 'blue'}
      />
        </View>
      )}
    </View>
  );
};

const style= StyleSheet.create ({
  imagem: {
    margin: 10,
    borderRadius: 10,
    marginTop: 30,
    width:374,
    height:300,
  },
  titulo: {
    fontSize: 25,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  texto1: {
    margin: 10,
    fontSize: 20,
    marginTop: 5,
  },
  texto2: {
    marginBottom: 50,
    margin: 10,
    fontSize: 20,
    marginTop: 5,
  },
})
export default Tela2;
