import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [content, setContent] = useState('Conteúdo Inicial');

  const handleButtonClick = () => {
    // Altere o conteúdo quando o botão for clicado
    setContent('Novo Conteúdo');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{content}</Text>
      <TouchableOpacity onPress={handleButtonClick} style={{ marginTop: 20, padding: 10, backgroundColor: 'blue' }}>
        <Text style={{ color: 'white' }}>Alterar Conteúdo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;