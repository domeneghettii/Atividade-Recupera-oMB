import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, description }) => {
return (
<View style={styles.card}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.description}>{description}</Text>
</View>
);
}   

