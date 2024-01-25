import { Text, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const AccountSreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text>{t('account_title')}</Text>
        </View>
    );
};

export default AccountSreen;

const styles = StyleSheet.create({
    container: {},
});
