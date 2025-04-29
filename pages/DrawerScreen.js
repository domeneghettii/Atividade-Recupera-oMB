import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import CardItem from '../components/CardItem';
import Icon from 'react-native-vector-icons/Ionicons';

const allData = [
{
id: '1',
title: 'Spirit- O Corcel Indomável',
description: 'Spirit: O Corcel Indomável é um filme de animação de 2002, dirigido por Kelly Asbury e Lorna Cook. A história gira em torno de um cavalo selvagem chamado Spirit, que vive livre nas vastas planícies do Velho Oeste americano.',
image: 'https://m.media-amazon.com/images/S/pv-target-images/9837c9cdb02d3981b7548bab7b26d34bff781c45178bb38001e03b867a1ab02f._SX1080_FMjpg_.jpg',
},
{
id: '2',
title: 'Velozos e Furiosos 10',
description: 'é uma franquia de filmes de ação que se concentra em corridas de rua, roubos, espionagem e a importância da família. A franquia inclui filmes, curtas-metragens, uma série de televisão, jogos eletrônicos e atrações de parques temáticos.',
image: 'https://s2.glbimg.com/43tcQZY6r_4XptjjBBoakvPGikw=/e.glbimg.com/og/ed/f/original/2017/04/11/g99358.jpg',
},
{
id: '3',
title: 'Barbie',
description: 'a Barbie é retratada como uma boneca loira, com um corpo elegante e proporções realistas, embora com alguma exageração para atender aos padrões estéticos.',
image: 'https://i.pinimg.com/originals/a5/77/12/a5771224894365d648768471aebc2188.jpg',
},
{
id: '4',
title: 'Crepúsculo',
description: 'Descrição do Filme CrepúsculoCrepúsculo é um filme de romance e fantasia lançado em 2008, baseado no livro homônimo de Stephenie Meyer.',
image: 'https://i.pinimg.com/originals/c4/8d/51/c48d51da76ee20abb95ea67a6a2fad4b.jpg',
},
];

const DrawerScreen = () => {
const [search, setSearch] = useState('');
const filteredData = allData.filter(item =>
item.title.toLowerCase().includes(search.toLowerCase())
);

return (
<View style={styles.container}>
<View style={styles.searchContainer}>
<Icon name="search" size={20} color="#888" style={styles.icon} />
<TextInput
style={styles.input}
placeholder="Buscar filme..."
value={search}
onChangeText={setSearch}
/>
</View>

<FlatList
data={filteredData}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<CardItem
title={item.title}
description={item.description}
image={item.image}
/>
)}
/>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f59795',
},
searchContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
width: '100%',
height: 50,
margin: 10,
backgroundColor: '#fff',
borderRadius: 8,
paddingHorizontal: 10,
elevation: 2,
},

icon: {
marginRight: 8,
},
input: {
flex: 1,
height: 40,
},
});

export default DrawerScreen;
