import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NumberButton from '@/Components/NumberButton';
import OperatorButton from '@/Components/OperatorButton';

export default function App() {
    const handleNumberButtonClick = (value: number) => {
        console.log(value);
    };

    const handleOperatorButtonClick = (value: string) => {
        console.log(value);
    };

    return (
        <View style={styles.layout}>
            <StatusBar style={'auto'} />
            <Text>Calculator Application</Text>
            <NumberButton numberValue={0} onPress={handleNumberButtonClick} />
            <NumberButton numberValue={1} onPress={handleNumberButtonClick} />
            <NumberButton numberValue={2} onPress={handleNumberButtonClick} />
            <OperatorButton operatorValue={'+'} onPress={handleOperatorButtonClick} />
            <OperatorButton operatorValue={'-'} onPress={handleOperatorButtonClick} />
            <OperatorButton operatorValue={'×'} onPress={handleOperatorButtonClick} />
            <OperatorButton operatorValue={'÷'} onPress={handleOperatorButtonClick} />
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
