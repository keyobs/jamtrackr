import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { TAppStackParamsList } from '@navigation/Navigation';
import { appRoutes } from '@navigation/appRoutes';

import { themeColors } from '@theme/colors';

import LeagueScreen from '@screens/league/LeagueScreen';
import PlayersScreen from '@screens/league/players/PlayersScreen';
import TeamsScreen from '@screens/league/teams/TeamsScreen';

const LeagueStack = createNativeStackNavigator<TAppStackParamsList>();

const LeagueRouter = () => {
    const { t } = useTranslation();

    return (
        <LeagueStack.Navigator
            screenOptions={{
                headerTintColor: themeColors.ivory,
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: themeColors.darkBlue,
                },
            }}
        >
            <LeagueStack.Screen
                name={appRoutes.LEAGUE}
                component={LeagueScreen}
                options={{
                    title: t('league_header_title'),
                }}
            />
            <LeagueStack.Screen
                name={appRoutes.PLAYERS}
                component={PlayersScreen}
                options={{
                    title: t('league_players_title'),
                }}
            />
            <LeagueStack.Screen
                name={appRoutes.TEAMS}
                component={TeamsScreen}
                options={{
                    title: t('league_teams_title'),
                }}
            />
        </LeagueStack.Navigator>
    );
};

export default LeagueRouter;
