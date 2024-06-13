import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonArea from '@/Components/ButtonArea';
import ResultArea from '@/Components/ResultArea';

export default function App() {
    return (
        <View style={styles.layout}>
            <StatusBar style={'auto'} />
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
