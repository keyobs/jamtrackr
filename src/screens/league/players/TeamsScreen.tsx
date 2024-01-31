import { useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { useTranslation } from 'react-i18next';

import {
    Text,
    StyleSheet,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

import { themeColors } from '@theme/colors';
import { Button, Icon } from '@rneui/themed';

import { InputLight } from '@components/inputs/InputLight';

const TeamsScreen = () => {
    const teamsFormRef = useRef(null);
    const { t } = useTranslation();

    const [teams, setTeams] = useState<string[]>([]);

    const onCreateTeam = (value) => setTeams([...teams, value]);

    console.log('teams', teams);

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            style={styles.container}
            getTextInoutRefs={() => teamsFormRef}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View
                style={{
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    paddingBottom: 50,
                }}
            >
                <View style={styles.teamsList}>
                    {teams.length === 0 ? (
                        <View style={{ alignItems: 'center', paddingTop: 50 }}>
                            <Icon
                                type="material-community"
                                name="kettle-steam-outline"
                                color={themeColors.ivory}
                                size={120}
                            />
                            <Text style={styles.sectionTitle}>
                                {t('teams_no_teams_disclaimer')}
                            </Text>
                        </View>
                    ) : (
                        <Text style={styles.sectionTitle}>Liste</Text>
                    )}
                </View>

                <CreateTeamForm teamsFormRef={teamsFormRef} onCreate={onCreateTeam} />
            </View>
        </KeyboardAwareScrollView>
    );
};

export default TeamsScreen;

const CreateTeamForm = ({ teamsFormRef, onCreate }) => {
    const { t } = useTranslation();

    const [teamName, setTeamName] = useState<string>('');

    const handleCreate = () => {
        onCreate(teamName);
        setTeamName('');
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.sectionTitle}>{t('teams_form_title')}</Text>
            <View style={styles.inputContainer}>
                <InputLight
                    label={t('teams_form_name_label')}
                    placeholder={t('teams_form_name_placeholder')}
                    forwardedRef={teamsFormRef}
                    value={teamName}
                    onChangeText={(value) => setTeamName(value)}
                    containerStyle={{
                        maxWidth: 330,
                    }}
                />
                <Button
                    title={t('teams_form_submit_button_label')}
                    containerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                    }}
                    buttonStyle={{
                        height: 45,
                        borderRadius: 5,
                        backgroundColor: themeColors.pink,
                    }}
                    onPress={() => handleCreate()}
                ></Button>
            </View>
        </View>
    );
};

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.darkBlue,
    },
    sectionTitle: {
        color: themeColors.ivory,
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    teamsList: {
        maxHeight: '70%',
        paddingHorizontal: 10,

        marginBottom: 20,
    },
    formContainer: {
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
});
