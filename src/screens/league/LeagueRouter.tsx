import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TAppStackParamsList } from '@navigation/Navigation';
import { appRoutes } from '@navigation/appRoutes';
import { themeColors } from '@theme/colors';

import LeagueScreen from './LeagueScreen';
import PlayersScreen from './players/PlayersScreen';

const LeagueStack = createNativeStackNavigator<TAppStackParamsList>();

const LeagueRouter = () => {
    return (
        <LeagueStack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: themeColors.darkBlue,
                },
            }}
        >
            <LeagueStack.Screen
                name={appRoutes.LEAGUE}
                component={LeagueScreen}
                options={{ headerShown: false }}
            />

            <LeagueStack.Screen
                name={appRoutes.PLAYERS}
                component={PlayersScreen}
                options={{ headerShown: false }}
            />
        </LeagueStack.Navigator>
    );
};

export default LeagueRouter;
