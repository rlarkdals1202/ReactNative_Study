import { StyleSheet, Text, View } from 'react-native';

interface Props {
    result: string;
}

export default function ResultArea({ result }: Props) {
    return (
        <View style={styles.resultAreaLayoutStyle}>
            <Text style={styles.expressionTextStyle}>{result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultAreaLayoutStyle: {
        backgroundColor: '#e2e8f0',
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    expressionTextStyle: {
        color: '#0f172a',
        fontSize: 70,
        margin: 10,
    },
});
