import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './Css/style.css';

const MaiorOuMenorIdade = () => {
  const [idade, setIdade] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificarIdade = () => {
    const idadeNum = parseInt(idade);
    if (isNaN(idadeNum)) {
      setMensagem('Por favor, insira uma idade válida.');
    } else if (idadeNum >= 18) {
      setMensagem('Você é maior de idade.');
    } else {
      setMensagem('Você é menor de idade.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Verifique sua Idade</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        placeholder="Digite sua idade"
        keyboardType="numeric"
      />
      <Button title="Verificar" onPress={verificarIdade} />
      {mensagem ? <Text>{mensagem}</Text> : null}
    </View>
  );
};

export default MaiorOuMenorIdade;
