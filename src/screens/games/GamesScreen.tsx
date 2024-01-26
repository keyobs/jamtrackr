import { Text, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const GamesScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text>{t('games_title')}</Text>
        </View>
    );
};

export default GamesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
