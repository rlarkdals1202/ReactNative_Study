import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonArea from '@/Components/ButtonArea';
import ResultArea from '@/Components/ResultArea';
import { useState } from 'react';

export default function App() {
    const [result, setResult] = useState(0);

    const handleNumberButtonPress = (value: number) => {
        let stringOperand: string;
        if (result === 0) {
            stringOperand = String(value);
        } else {
            stringOperand = `${result}${value}`;
        }
        setResult(Number(stringOperand));
    };

    const handleClearButtonPress = () => {
        setResult(0);
    };

    return (
        <View style={styles.layout}>
            <StatusBar style={'auto'} />
            <ResultArea result={String(result)} />
            <ButtonArea onNumberButtonPress={handleNumberButtonPress} onClearButtonPress={handleClearButtonPress} />
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
