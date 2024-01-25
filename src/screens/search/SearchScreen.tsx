import { Text, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const SearchScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text>{t('search_title')}</Text>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {},
});
