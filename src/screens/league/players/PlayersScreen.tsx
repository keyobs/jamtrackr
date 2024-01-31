import {
    Text,
    StyleSheet,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';
import { themeColors } from '@theme/colors';

const PlayersScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.section, styles.playersList]}>
                <Text style={styles.listTitle}>Liste</Text>
                <Text>number name team</Text>
                <Text></Text>
            </View>

            <View style={styles.section}>
                <Text>Create a new player</Text>
                <Text>name</Text>
                <Text>number</Text>
                <Text>role</Text>
                <Text>team</Text>
            </View>
        </View>
    );
};

export default PlayersScreen;

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.darkBlue,
        paddingTop: 15,
    },
    section: {
        flex: 2,
    },
    playersList: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: themeColors.ivory,
        borderBottomColor: themeColors.ivory,
    },
    listTitle: {
        color: themeColors.ivory,
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderBottomColor: themeColors.ivory,
        borderBottomWidth: 1,
    },
});
