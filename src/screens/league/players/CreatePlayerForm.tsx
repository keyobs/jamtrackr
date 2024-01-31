import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Text,
    StyleSheet,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { themeColors } from '@theme/colors';

import { ButtonGroup } from '@rneui/themed';
import { Button } from '@rneui/base';

import { InputLight } from '@components/inputs/InputLight';
import SubmitButton from '@components/buttons/SubmitButton';

type TPlayer = {
  name: string;
  number: string;
  roles: TRole[];
  team: string;
};

export type TRole = 'blocker' | 'jammer' | 'pivot';

export const CreatePlayerForm = () => {
    const { t } = useTranslation();

    const refs = {
        nameRef: useRef(null),
        numberRef: useRef(null),
        roleRef: useRef(null),
        teamRef: useRef(null),
    };

    const [playerForm, setPlayerForm] = useState<TPlayer>({
        name: '',
        number: '',
        roles: [],
        team: '',
    });

    const roleOptions: TRole[] = ['blocker', 'jammer', 'pivot'];
    const handleSelectRoles = (value: number[]) => {
        const roles = value.map((index) => roleOptions[index]);
        setPlayerForm({ ...playerForm, roles: roles });
    };

    console.log('form', playerForm);

    return (
        <View style={styles.form}>
            <Text style={styles.formTitle}>{t('players_form_title')}</Text>

            <InputLight
                forwardedRef={refs.nameRef}
                label={t('players_form_name_label')}
                value={playerForm.name}
                onChangeText={(value) => setPlayerForm({ ...playerForm, name: value })}
            />
            <InputLight
                forwardedRef={refs.numberRef}
                label={t('players_form_number_label')}
                value={playerForm.number}
                onChangeText={(value) =>
                    setPlayerForm({ ...playerForm, number: value })
                }
            />

            <View style={{ marginBottom: 20 }}>
                <Text style={styles.label}>{t('players_form_role_label')}</Text>
                <ButtonGroup
                    buttons={roleOptions}
                    selectMultiple
                    selectedIndexes={playerForm.roles.map((role) =>
                        roleOptions.indexOf(role),
                    )}
                    onPress={handleSelectRoles}
                    buttonContainerStyle={{
                        backgroundColor: themeColors.ivory,
                    }}
                    textStyle={{
                        color: '#00131a',
                    }}
                    selectedButtonStyle={{
                        backgroundColor: '#20B2AA',
                    }}
                />
            </View>

            <View style={{ marginBottom: 25 }}>
                <Text style={styles.label}>{t('players_form_teams_label')}</Text>
                <Button
                    onPress={() => alert('add a team')}
                    containerStyle={{
                        marginHorizontal: 10,
                        marginVertical: 5,
                    }}
                    buttonStyle={{
                        width: 40,
                        height: 40,
                        backgroundColor: themeColors.ivory,
                    }}
                    iconContainerStyle={{
                        backgroundColor: themeColors.ivory,
                    }}
                    icon={
                        <MaterialCommunityIcons
                            name="plus"
                            size={20}
                            color={themeColors.darkBlue}
                        />
                    }
                />
            </View>

            <SubmitButton
                title={t('players_add_button_label')}
                onPress={() => alert('player added')}
            />
        </View>
    );
};

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    form: {
        paddingBottom: 50,
    },
    formTitle: {
        color: themeColors.ivory,
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    label: {
        color: themeColors.ivory,
        fontSize: 15,
        paddingHorizontal: 10,
        paddingBottom: 5,
    },
});
