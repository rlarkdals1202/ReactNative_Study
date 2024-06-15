import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

interface Props {
    operatorValue: string;
    onPress: (value: string) => void;
}

export default function OperatorButton({ operatorValue, onPress }: Props) {
    const { width, height } = useWindowDimensions();

    return (
        <Pressable
            onPress={() => {
                onPress(operatorValue);
            }}
            style={({ pressed }) => {
                return [
                    { width: width / 4, height: height / 8 },
                    styles.operatorButtonStyle,
                    pressed && styles.operatorButtonPressedStyle,
                ];
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
        backgroundColor: '#cbd5e1',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },

    operatorButtonPressedStyle: {
        opacity: 0.75,
    },

    operatorButtonTextStyle: {
        color: '#0f172a',
        fontSize: 50,
    },
});
