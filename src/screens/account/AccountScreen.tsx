import { Text, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const AccountScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text>{t('account_title')}</Text>
        </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
