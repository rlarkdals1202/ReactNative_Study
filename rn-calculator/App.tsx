import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonArea from '@/Components/ButtonArea';
import ResultArea from '@/Components/ResultArea';
import { useState } from 'react';

export default function App() {
    return (
        <View style={styles.layout}>
            <StatusBar style={'auto'} />
            <ResultArea result={'0'} />
            <ButtonArea />
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
