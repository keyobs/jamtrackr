import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import AccountScreen from '@screens/account/AccountScreen';
import DashboardScreen from '@screens/dashboard/DashboardScreen';
import GamesScreen from '@screens/games/GamesScreen';
import LeagueScreen from '@screens/league/LeagueScreen';
import SearchScreen from '@screens/search/SearchScreen';

export type AppStackParamsList = {
  Dashboard: undefined;
  Games: undefined;
  League: undefined;
  Search: undefined; // {query: string}
  Account: undefined;
};

const Tab = createMaterialBottomTabNavigator<AppStackParamsList>();

type TTab = {
  name: string;
  label: string;
  component: ComponentProps<typeof Tab.Screen>['component'];
  materialIcon: ComponentProps<typeof MaterialCommunityIcons>['name'];
}[];

const tabs: TTab = [
    {
        name: 'Dashboard',
        label: 'home',
        component: DashboardScreen,
        materialIcon: 'home',
    },
    {
        name: 'Games',
        label: 'games_title',
        component: GamesScreen,
        materialIcon: 'apps',
    },
    {
        name: 'League',
        label: 'league_title',
        component: LeagueScreen,
        materialIcon: 'creation',
    },
    {
        name: 'Search',
        label: 'search_title',
        component: SearchScreen,
        materialIcon: 'magnify',
    },
    {
        name: 'Account',
        label: 'account_title',
        component: AccountScreen,
        materialIcon: 'account',
    },
];

const TabsNavigator = () => {
    const { t } = useTranslation();

    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            activeColor="#FF13CB"
            inactiveColor="#15132D"
        >
            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name as keyof AppStackParamsList}
                    component={tab.component}
                    options={{
                        tabBarLabel: t(tab.label),
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name={tab.materialIcon}
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default TabsNavigator;
