import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    StyleSheet,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { Trans, useTranslation } from 'react-i18next';

import { themeColors } from '@theme/colors';
import { TAppStackParamsList } from '@navigation/Navigation';
import { appRoutes } from '@navigation/appRoutes';

import { usePlayersStore } from '@store/playersStore';
import { useTeamsStore } from '@store/teamsStore';

import { WideNavigationButton } from '@components/buttons/WideNavigationButton';
import NoListItem from '@components/lists/NoListItem';
import TeamCard from './teams/TeamCard';
import DeleteBottomSheet from '@components/modals/DeleteBottomSheet';

const LeagueScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<TAppStackParamsList>();

    const { playersList } = usePlayersStore((state) => state);
    const { teamsList } = useTeamsStore((state) => state);

    const [teamToDelete, setTeamToDelete] = useState(null);

    const onDeleteTeam = (team: string) => {
        setTeamToDelete(team);
    };

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={[styles.section, styles.teams]}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>
                            {t('league_teams_title')}
                        </Text>
                    </View>
                    {teamsList.length > 0 ? (
                        teamsList.map((team) => (
                            <TeamCard
                                key={team.name}
                                teamName={team.name}
                                onEdit={() => alert('edit team')}
                                onDelete={() => onDeleteTeam(team.name)}
                            />
                        ))
                    ) : (
                        <NoListItem
                            disclaimerText={t('teams_no_teams_disclaimer')}
                            iconSize={60}
                        />
                    )}
                    <WideNavigationButton
                        label={t('league_teams_add_button_label')}
                        direction="next"
                        onPressAction={() => navigation.navigate(appRoutes.TEAMS)}
                    />
                </View>

                <View style={[styles.section, styles.players]}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>
                            {t('league_players_title')}
                        </Text>
                    </View>
                    {playersList.length > 0 ? null : (
                        <NoListItem
                            disclaimerText={t('players_no_players_disclaimer')}
                            iconSize={60}
                        />
                    )}

                    <WideNavigationButton
                        label={t('league_players_manage_button_label')}
                        direction="next"
                        onPressAction={() => navigation.navigate(appRoutes.PLAYERS)}
                    />
                </View>

                <DeleteBottomSheet
                    onBackdropPress={() => setTeamToDelete(null)}
                    isVisible={teamToDelete !== null}
                    onClose={() => setTeamToDelete(null)}
                    onDelete={() => alert('delete team')}
                    deleteMessage={
                        <Trans
                            i18nKey="teams_delete_modal_message"
                            parent={Text}
                            values={{ newline: '\n', teamName: teamToDelete }}
                        />
                    }
                />
            </View>
        </SafeAreaProvider>
    );
};

export default LeagueScreen;

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.darkBlue,
    },
    section: {
        maxHeight: '50%',
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    sectionTitle: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: themeColors.ivory,
        borderBottomWidth: 1,
        borderBottomColor: themeColors.ivory,
        marginBottom: 20,
    },

    sectionTitleText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    teams: {
        marginBottom: 40,
    },

    players: {},

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
