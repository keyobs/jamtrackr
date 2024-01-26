import { Text, StyleSheet, View } from 'react-native';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>App is alive</Text>
        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
