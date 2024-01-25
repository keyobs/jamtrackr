import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import './translations/configI18n';

import DashboardScreen from './screens/dashboard/DashboardScreen';

export default function App() {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text>{t('games_title')}</Text>
            <DashboardScreen />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
