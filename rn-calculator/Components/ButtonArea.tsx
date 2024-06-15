import { StyleSheet, View } from 'react-native';
import NumberButton from '@/Components/NumberButton';
import OperatorButton from '@/Components/OperatorButton';

interface Props {
    onNumberButtonPress(value: number): void;
    onClearButtonPress(): void;
}

export default function ButtonArea({ onNumberButtonPress, onClearButtonPress }: Props) {
    const handleOperatorButtonPress = (value: string) => {
        console.log(value);
    };

    return (
        <View style={styles.buttonAreaLayout}>
            <NumberButton numberValue={7} onPress={onNumberButtonPress} />
            <NumberButton numberValue={8} onPress={onNumberButtonPress} />
            <NumberButton numberValue={9} onPress={onNumberButtonPress} />
            <OperatorButton operatorValue={'÷'} onPress={handleOperatorButtonPress} />

            <NumberButton numberValue={4} onPress={onNumberButtonPress} />
            <NumberButton numberValue={5} onPress={onNumberButtonPress} />
            <NumberButton numberValue={6} onPress={onNumberButtonPress} />
            <OperatorButton operatorValue={'×'} onPress={handleOperatorButtonPress} />

            <NumberButton numberValue={1} onPress={onNumberButtonPress} />
            <NumberButton numberValue={2} onPress={onNumberButtonPress} />
            <NumberButton numberValue={3} onPress={onNumberButtonPress} />
            <OperatorButton operatorValue={'-'} onPress={handleOperatorButtonPress} />

            <NumberButton numberValue={0} onPress={onNumberButtonPress} />
            <OperatorButton operatorValue={'C'} onPress={onClearButtonPress} />
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
