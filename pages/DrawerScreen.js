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

      <Card
        title="Barbie"
        description="a Barbie é retratada como uma boneca loira, com um corpo elegante e proporções realistas, embora com alguma exageração para atender aos padrões estéticos."
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/a5/77/12/a5771224894365d648768471aebc2188.jpg",
          }}
          style={styles.image}
        />
      </Card>
      
      <Card
        title="Spirit- O Corcel Indomável"
        description="Spirit: O Corcel Indomável é um filme de animação de 2002, dirigido por Kelly Asbury e Lorna Cook. A história gira em torno de um cavalo selvagem chamado Spirit, que vive livre nas vastas planícies do Velho Oeste americano."
      >
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/S/pv-target-images/9837c9cdb02d3981b7548bab7b26d34bff781c45178bb38001e03b867a1ab02f._SX1080_FMjpg_.jpg",
          }}
          style={styles.image}
      />
      </Card>

      <Card
        title="Crepúsculo"
        description="Crepúsculo é um filme de romance e fantasia lançado em 2008, baseado no livro homônimo de Stephenie Meyer."
        >
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/c4/8d/51/c48d51da76ee20abb95ea67a6a2fad4b.jpg",
          }}  
          style={styles.image}
        />
        </Card>
    
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  cardDescription: {  
    fontSize: 16,
    color: "#000",
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