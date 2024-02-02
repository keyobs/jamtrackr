import { useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import {
    Text,
    StyleSheet,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

import { themeColors } from '@theme/colors';
import { CreatePlayerForm } from './CreatePlayerForm';
import { useTeamStore } from '@store/teamsStore';

const PlayersScreen = () => {
    const formRef = useRef(null);

    const { teamsList } = useTeamStore((state) => state);

    console.log('teams', teamsList);

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            style={styles.container}
            getTextInoutRefs={() => formRef}
        >
            <View style={styles.container}>
                <View style={[styles.section, styles.playersList]}>
                    <Text style={styles.listTitle}>Liste</Text>
                    <Text>number name team</Text>
                    <Text></Text>
                </View>
                <View ref={formRef}>
                    <CreatePlayerForm />
                </View>
            </View>
        </KeyboardAwareScrollView>
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
        paddingTop: 10,
    },
    section: {
        minHeight: 200,
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
