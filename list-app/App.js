import React, { useState } from 'react';
// Este import é necessário pois ele permite o uso de estados
// na aplicação (atualizar interface em tempo real)
// React: biblioteca principal do React responsável por renderizar os componentes 
// useState: hook do React, permite adicionar e utilizar o estado nos componentes
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

// Estes são os componentes e estilos do React Native usados aqui
// é necessário importar todos que for usar, porém pode-se adicionar todos
// de uma só vez substituindo o import acima por:
// import * as ReactNative from 'react-native'

// Vai retornar definição do componente funcional
export default function App() {
  // Declaração do estado 'list' e da função 'setList' para atualizar o estado
  // O estado 'list' será uma lista vazia inicialmente
  const [list, setList] = useState([]);
  
  // Declaração do estado 'textInputValue' e da função 'setTextInputValue'
  // O estado 'textInputValue' será uma string vazia inicialmente
  const [textInputValue, setTextInputValue] = useState('');

  // Função p adicionar um item à lista
  const addItem = () => {
    // Verifica se o valor do texto de entrada não está vazio
    // trim() para remover os espaços em branco do começo ou fim do texto
    if (textInputValue.trim() !== '') {
      // Adiciona o valor do texto de entrada à lista
      // O spread operator (...) para mantem os itens ja adicionados
      setList([...list, textInputValue]);
      // Limpa o valor do input
      setTextInputValue('');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.appbar}>
        <Text style={styles.appbartxt}>To-Do List</Text>
      </View>
      {/* // View é tudo que estará no campo de visão, a interface deverá estar dentro dele */}
      <View style={styles.container}>
      {/* Obs.: Os comentários de entre as tags e seus filhos dever estar entre "{/ * a * /}" */}
      {/* Input */}
      <TextInput
        value={textInputValue}
        // O estado 'textInputValue' definido lá em cima sendo usado aqui
        onChangeText={value => setTextInputValue(value)}
        placeholder="Digite um valor"
        // Fazendo uma analogia a web HTML+CSS...
        // styles aqui é como um arquivo .css e textInput as classes contidas nele
        style={styles.textInput}
      />
      {/* Botão que irá executar a função addItem() */}
      {/* Observe que o estilo está inline, uma opção seria colocar
          style={styles.botao} e no bloco styles lá embaixo inserir 
          color="#2196F3"*/}
      <Button onPress={addItem} title="Adicionar" color="#2196F3" />
      {/* Rótulo da lista */}
      <Text style={styles.listLabel}>Lista:</Text>
      {/* Função map para renderizar os itens da lista */}
      {list.map((item, index) => (
        // Cada item um componente de texto
        <Text key={index} style={styles.listItem}>
          {item}
        </Text>
      ))}
    </View>
    </ScrollView>
  );
  }

  // Autoexplicativo ;)
  const styles = StyleSheet.create({
    scroll:{
      flex: 1,
      height: '100%',
    },
    appbar:{
      height: '15%',
      backgroundColor: 'rgba(153, 51, 153, 100)',
      alignItems: 'center',
      padding: '5%',
      justifyContent: 'flex-end',
    },
    appbartxt:{
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      padding:'10%',
      justifyContent: 'flex-start',
      backgroundColor: '#F5F5F5',
    },
    textInput: {
      width: '80%',
      height: 40,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: '#FFFFFF',
    },
    listLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333333',
    },
    listItem: {
      fontSize: 16,
      color: '#666666',
      marginBottom: 5,
    },
  });