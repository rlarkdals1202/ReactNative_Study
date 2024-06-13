import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    numberValue: number;
    onPress: (value: number) => void;
}

export default function NumberButton({ numberValue, onPress }: Props) {
    return (
        <Pressable
            onPress={() => {
                onPress(numberValue);
            }}
            style={({ pressed }) => {
                return [pressed && styles.numberButtonPressedStyle];
            }}
        >
            <LinearGradient colors={['#0284c7', '#0d9488']} start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 }}>
                <View style={[{ height: 100, width: numberValue === 0 ? 200 : 100 }, styles.numberButtonStyle]}>
                    <Text style={styles.numberButtonTextStyle}>{numberValue}</Text>
                </View>
            </LinearGradient>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    numberButtonStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    numberButtonPressedStyle: {
        opacity: 0.75,
    },

    numberButtonTextStyle: {
        color: 'white',
        fontSize: 50,
    },
});
