import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function OrphanageDetails() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15c3d6',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 50,
        color: '#fff',
    }


});