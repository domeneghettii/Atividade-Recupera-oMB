import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const CardItem = ({ title, description, image }) => {
return (
<View style={styles.card}>
<Image source={{ uri: image }} style={styles.image} />
<Text style={styles.title}>{title}</Text>
<Text style={styles.description}>{description}</Text>
</View>
);
};

const styles = StyleSheet.create({
card: {
backgroundColor: '#fff',
borderRadius: 8,
padding: 16,
marginVertical: 8,
marginHorizontal: 16,
elevation: 3,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 3.84,
},
image: {
width: '100%',
height: 350,
borderRadius: 4,
marginBottom: 8,
},
title: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 4,
},
description: {
fontSize: 14,
color: '#666',
},
});

export default CardItem;

