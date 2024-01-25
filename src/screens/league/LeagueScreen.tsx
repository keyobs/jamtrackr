import { Text, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const LeagueScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text>{t('league_title')}</Text>
        </View>
    );
};

export default LeagueScreen;

const styles = StyleSheet.create({
    container: {},
});
