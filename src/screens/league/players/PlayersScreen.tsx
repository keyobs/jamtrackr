import { useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import {
    StyleSheet,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

import { themeColors } from '@theme/colors';
import { useTranslation } from 'react-i18next';
import { ListItem } from '@rneui/base';

import { usePlayersStore } from '@store/playersStore';
import { CreatePlayerForm } from './CreatePlayerForm';

const PlayersScreen = () => {
    const formRef = useRef(null);
    const { t } = useTranslation();

    const { playersList } = usePlayersStore((state) => state);

    const [openCreatePlayerForm, setOpenCreatePlayerForm] = useState(false);

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

                <ListItem.Accordion
                    containerStyle={{
                        backgroundColor: themeColors.pink,
                        borderBottomColor: themeColors.ivory,
                        borderBottomWidth: 1,
                    }}
                    icon={{
                        type: 'feather',
                        name: 'chevron-down',
                        color: themeColors.ivory,
                    }}
                    content={
                        <>
                            <ListItem.Content>
                                <ListItem.Title style={{ color: themeColors.ivory }}>
                                    {t('players_form_title')}
                                </ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={openCreatePlayerForm}
                    onPress={() => setOpenCreatePlayerForm(!openCreatePlayerForm)}
                >
                    <View ref={formRef} style={{ paddingTop: 20 }}>
                        <CreatePlayerForm />
                    </View>
                </ListItem.Accordion>
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
    formTitle: {
        color: themeColors.ivory,
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    section: {
        minHeight: 200,
    },
    playersList: {
        borderBottomWidth: 1,
        borderBottomColor: themeColors.ivory,
    },
});
