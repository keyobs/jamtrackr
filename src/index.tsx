import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import './translations/configI18n';

import { StatusBar } from 'expo-status-bar';

import RootNavigator from '@navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <SafeAreaProvider>
                <StatusBar style="auto" />
                <RootNavigator />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
