import { Text, StyleSheet, View } from 'react-native';
import { themeColors } from '@theme/colors';

const PlayersScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Create a new player</Text>
        </View>
    );
};

export default PlayersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.darkBlue,
    },
    text: {
        color: themeColors.ivory,
    },
});
