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
import { WideButtonWithIcon } from '@components/buttons/WideButtonWithIcon';

import { CreatePlayerForm } from './CreatePlayerForm';
import NoListItem from '@components/lists/NoListItem';

const PlayersScreen = () => {
    const formRef = useRef(null);
    const { t } = useTranslation();

    const { playersList } = usePlayersStore((state) => state);

    const [openCreatePlayerForm, setOpenCreatePlayerForm] = useState(true);

    return (
        <KeyboardAwareScrollView
            style={styles.container}
            keyboardShouldPersistTaps="always"
            getTextInoutRefs={() => formRef}
        >
            <View style={styles.content}>
                <WideButtonWithIcon
                    label={t('players_to_players_list_button_label')}
                    preset="chevron-next"
                    onPressAction={() => alert('to the players list')}
                />

                {playersList.length > 0 ? (
                    <View
                        style={{
                            minHeight: 200,
                        }}
                    ></View>
                ) : (
                    <NoListItem
                        disclaimerText={t('players_no_players_disclaimer')}
                        iconSize={60}
                    />
                )}

                <View>
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
        paddingBottom: 50,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
    },
    formTitle: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: themeColors.ivory,
        color: themeColors.darkBlue,
        borderBottomWidth: 2,
        borderBottomColor: themeColors.darkBlue,
    },
    section: {
        minHeight: 200,
    },
    playersList: {
        borderBottomWidth: 1,
        borderBottomColor: themeColors.ivory,
    },
});
