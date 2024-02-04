import { useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import {
    StyleSheet,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

import { themeColors } from '@theme/colors';
import { CreatePlayerForm } from './CreatePlayerForm';
import { usePlayersStore } from '@store/playersStore';
import { ListItem } from '@rneui/base';

const PlayersScreen = () => {
    const formRef = useRef(null);

    const { playersList } = usePlayersStore((state) => state);

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            style={styles.container}
            getTextInoutRefs={() => formRef}
        >
            <View style={styles.content}>
                <View style={[styles.section, styles.playersList]}>
                    {[...playersList].map((player) => (
                        <ListItem key={player.name}>
                            <ListItem.Content>
                                <ListItem.Title>{player.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
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
    content: {
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingBottom: 50,
    },
    section: {
        minHeight: 200,
    },
    playersList: {
        borderBottomWidth: 1,
        borderBottomColor: themeColors.ivory,
    },
});
