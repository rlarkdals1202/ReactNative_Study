import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    operatorValue: string;
    onPress: (value: string) => void;
}

export default function OperatorButton({ operatorValue, onPress }: Props) {
    return (
        <Pressable
            onPress={() => {
                onPress(operatorValue);
            }}
            style={({ pressed }) => {
                return [styles.operatorButtonStyle, pressed && styles.operatorButtonPressedStyle];
            }}
        >
            <Text style={styles.operatorButtonTextStyle}>{operatorValue}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    operatorButtonStyle: {
        display: 'flex',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#cbd5e1',
        alignItems: 'center',
    },

    operatorButtonPressedStyle: {
        opacity: 0.75,
    },

    operatorButtonTextStyle: {
        color: '#0f172a',
        fontSize: 50,
    },
});
