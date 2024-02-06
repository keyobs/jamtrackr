import {
    Text,
    StyleSheet,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import { themeColors } from '@theme/colors';
import { TAppStackParamsList } from '@navigation/Navigation';
import { appRoutes } from '@navigation/appRoutes';

import { usePlayersStore } from '@store/playersStore';
import { useTeamsStore } from '@store/teamsStore';

import { WideNavigationButton } from '@components/buttons/WideNavigationButton';
import NoListItem from '@components/lists/NoListItem';
import TeamCard from './teams/TeamCard';

const LeagueScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<TAppStackParamsList>();

    const { playersList } = usePlayersStore((state) => state);
    const { teamsList } = useTeamsStore((state) => state);

    return (
        <View style={styles.container}>
            <View style={[styles.section, styles.teams]}>
                <View style={styles.sectionTitle}>
                    <Text style={styles.sectionTitleText}>{t('league_teams_title')}</Text>
                </View>
                {teamsList.length > 0 ? (
                    teamsList.map((team) => (
                        <TeamCard key={team.name} teamName={team.name} />
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
        </View>
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
