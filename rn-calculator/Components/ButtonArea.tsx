import { StyleSheet, View } from 'react-native';
import NumberButton from '@/Components/NumberButton';
import OperatorButton from '@/Components/OperatorButton';

export default function ButtonArea() {
    const handleNumberButtonPress = (value: number) => {
        console.log(value);
    };

    const handleOperatorButtonPress = (value: string) => {
        console.log(value);
    };

    return (
        <View style={styles.buttonAreaLayout}>
            <NumberButton numberValue={7} onPress={handleNumberButtonPress} />
            <NumberButton numberValue={8} onPress={handleNumberButtonPress} />
            <NumberButton numberValue={9} onPress={handleNumberButtonPress} />
            <OperatorButton operatorValue={'÷'} onPress={handleOperatorButtonPress} />

            <NumberButton numberValue={4} onPress={handleNumberButtonPress} />
            <NumberButton numberValue={5} onPress={handleNumberButtonPress} />
            <NumberButton numberValue={6} onPress={handleNumberButtonPress} />
            <OperatorButton operatorValue={'×'} onPress={handleOperatorButtonPress} />

            <NumberButton numberValue={1} onPress={handleNumberButtonPress} />
            <NumberButton numberValue={2} onPress={handleNumberButtonPress} />
            <NumberButton numberValue={3} onPress={handleNumberButtonPress} />
            <OperatorButton operatorValue={'-'} onPress={handleOperatorButtonPress} />

            <NumberButton numberValue={0} onPress={handleNumberButtonPress} />
            <OperatorButton operatorValue={'='} onPress={handleOperatorButtonPress} />
            <OperatorButton operatorValue={'+'} onPress={handleOperatorButtonPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonAreaLayout: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
