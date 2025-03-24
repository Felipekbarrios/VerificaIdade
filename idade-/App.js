import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './Css/style.css';

const MaiorOuMenorIdade = () => {
  const [idade, setIdade] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleChange = (value) => {
    setIdade(value);
  };


  const verificarIdade = () => {
    const idadeNum = Number(idade);
    if (idadeNum >= 18) {
      setMensagem('Você é maior de idade.');
    } else if (idadeNum > 0) {
      setMensagem('Você é menor de idade.');
    } else {
      setMensagem('Por favor, insira uma idade válida.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Verifique sua Idade</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={handleChange}
        placeholder="Digite sua idade"
        keyboardType="numeric" 
      />
      <Button title="Verificar" onPress={verificarIdade} />
      {mensagem ? <Text>{mensagem}</Text> : null}
    </View>
  );
};

export default MaiorOuMenorIdade;
