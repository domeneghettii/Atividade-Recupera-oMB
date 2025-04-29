import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


export default function Home() {
  const [texto, setTexto] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Movies</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme"
        value={texto}
        onChangeText={setTexto}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 25,
    gap: 20,
    backgroundColor: "pink",
  },
  titulo: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  textoVerde: {
    fontSize: 20,
    textAlign: "center",
    color: "#206220",
  },
  input: {
    borderWidth: 1,
    borderColor: "#6F2739",
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    width: '100%',
  },
  botao1: {
    backgroundColor: "#48CAE8", 
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    margin: 'auto',
    width: '35%',
    marginVertical: 4, 
  },
  botao2: {
    backgroundColor: "#e11212", 
    padding: 10,
    margin: 'auto',
    width: '35%',
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4, 
  },

  textoBotao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});