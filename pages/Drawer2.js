import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Drawer2() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5njZwgLbI1IQyt_0s7XMTXE1dpCaH4BFx1xtbrs_hOo2C0LHXVE86CLigSwzKlMab94g&usqp=CAU",
                }}
                style={styles.image}
            />
            <Text style={styles.text}>
            Em um futuro apocalíptico, o jovem Thomas é escolhido para enfrentar o sistema. Ele acorda dentro de um escuro elevador em movimento e não consegue se lembrar nem de seu nome. Na comunidade isolada em que foi abandonado, Thomas conhece outros garotos que passaram pela mesma situação. Para conseguir escapar, ele precisa descobrir os sombrios segredos guardados em sua mente e correr muito.
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