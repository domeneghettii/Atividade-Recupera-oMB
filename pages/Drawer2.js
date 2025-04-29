import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Drawer2() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://pm1.aminoapps.com/6744/d488e8c29ce85b08fe896761d3d136bc02fd7340v2_00.jpg",
                }}
                style={styles.image}
            />
            <Text style={styles.text}>
            Katerina Petrova é uma personagem fictícia da série de televisão The Vampire Diaries, interpretada por Nina Dobrev. Ela é uma vampira que tem um papel central na trama, sendo uma das principais antagonistas da série. Katerina é conhecida por sua beleza, inteligência e manipulação, além de ter um passado complexo que a liga a vários personagens principais. Sua história envolve amor, traição e busca por poder, tornando-a uma figura intrigante e multifacetada na narrativa da série.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
        padding: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 18,
        marginBottom: 18,
    },
    text: {
        fontSize: 18,
        color: "black",
        textAlign: "center",
        fontStyle: "Semi Bold",
        paddingHorizontal: 20,
    },
});