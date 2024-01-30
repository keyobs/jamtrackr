import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './translations/configI18n';

import { StatusBar } from 'expo-status-bar';

import RootNavigator from '@navigation/Navigation';
import { themeColors } from './theme/colors';

export default function App() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <SafeAreaProvider>
                <StatusBar
                    animated={true}
                    backgroundColor={themeColors.ivory}
                    style="dark"
                />
                <RootNavigator />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
