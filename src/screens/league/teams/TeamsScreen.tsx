import { useRef } from 'react';
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
import { Icon } from '@rneui/themed';

import CreateTeamForm from '@screens/league/teams/CreateTeamForm';
import TeamCard from '@screens/league/teams/TeamCard';
import { useTeamsStore } from '@store/teamsStore';

const TeamsScreen = () => {
    const teamsFormRef = useRef(null);
    const { t } = useTranslation();

    const { teamsList, updateTeamsList } = useTeamsStore((state) => state);

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
                    {teamsList.length > 0 ? (
                        <View>
                            <Text style={styles.sectionTitle}>Liste</Text>
                            <View>
                                {teamsList.map((team) => (
                                    <TeamCard key={team.name} teamName={team.name} />
                                ))}
                            </View>
                        </View>
                    ) : (
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
                    )}
                </View>

                <CreateTeamForm
                    teamsFormRef={teamsFormRef}
                    onCreate={updateTeamsList}
                />
            </View>
        </KeyboardAwareScrollView>
    );
};

export default TeamsScreen;

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
});
