import { useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

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

type TRole = 'blocker' | 'jammer' | 'pivot';

const PlayersScreen = () => {
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
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            style={styles.container}
            getTextInoutRefs={() => refs.nameRef}
        >
            <View style={styles.container}>
                <View style={[styles.section, styles.playersList]}>
                    <Text style={styles.listTitle}>Liste</Text>
                    <Text>number name team</Text>
                    <Text></Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.formTitle}>Create a new player</Text>
                    <InputLight
                        forwardedRef={refs.nameRef}
                        label="Name"
                        value={playerForm.name}
                        onChangeText={(value) =>
                            setPlayerForm({ ...playerForm, name: value })
                        }
                    />
                    <InputLight
                        forwardedRef={refs.numberRef}
                        label="Number"
                        value={playerForm.number}
                        onChangeText={(value) =>
                            setPlayerForm({ ...playerForm, number: value })
                        }
                    />

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.label}>Roles</Text>
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
                        <Text style={styles.label}>Teams</Text>
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
                        title="Add player"
                        onPress={() => alert('player added')}
                    />
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
