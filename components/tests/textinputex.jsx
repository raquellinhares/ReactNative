/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Texto inicial');
  const [number, onChangeNumber] = React.useState('');
  return (
  <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      keyboardType="email-address"
    />

    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="dica"
      keyboardType="numeric"
      inputMode="numeric"
    />

    <Text>Variavel texto: {text}</Text>

    <Text>Variavel numero: {number}</Text>
  </SafeAreaView>
};
);
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default TextInputExample;
