/* eslint-disable jsx-quotes */
/* eslint-disable space-infix-ops */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, Button, View } from 'react-native';

const IMC = () => {


  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [messageImc, setMassageImc] = useState("preencha seu peso e sua altura")
  const [imc, setImc] = useState('')
  const [textButton, setTextButton] = useState("Calcular")


  function ImcCalculator() {
    return setImc((parseFloat(weight) / (parseFloat(height) * parseFloat(height))).toFixed(2))

  }

  function validationIMC() {
    if (weight != '' && height != '') {
      ImcCalculator()
      setHeight('')
      setWeight('')
      setMassageImc("Seu IMC e igual:")
      setTextButton("Calcular novamente")
      return
    }
    setImc('')
    setTextButton("Calcular")
  }


  return (
    <SafeAreaView>
      <Text >Calcular IMC:</Text>
      <Text>Altura</Text>
      <TextInput
        onChangeText={setHeight}
        value={height}
        placeholder='ex: 1.75'
        keyboardType='numeric'
        />
      <Text>Peso</Text>
      <TextInput
        onChangeText={setWeight}
        value={weight}
        placeholder='ex. 69'
        keyboardType='numeric'
      />
      <Button title='Calcular IMC'/>
      <View>
        <ResultImc massageResultImc={messageImc} resultImc={imc} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default IMC;