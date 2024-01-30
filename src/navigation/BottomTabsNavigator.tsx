import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, StyleSheet } from 'react-native';

import { themeColors } from '@theme/colors';
import { TAppStackParamsList } from './Navigation';

import AccountScreen from '@screens/account/AccountScreen';
import DashboardScreen from '@screens/dashboard/DashboardScreen';
import GamesScreen from '@screens/games/GamesScreen';
import SearchScreen from '@screens/search/SearchScreen';
import LeagueRouter from '@screens/league/LeagueRouter';

const BottomTabs = createBottomTabNavigator<TAppStackParamsList>();

type TBottomTab = {
  name: string;
  label: string;
  component: ComponentProps<typeof BottomTabs.Screen>['component'];
  materialIcon: ComponentProps<typeof MaterialCommunityIcons>['name'];
}[];

const bottomTabs: TBottomTab = [
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
        name: 'League_Router',
        label: 'league_header_title',
        component: LeagueRouter,
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

const BottomTabsNavigator = () => {
    const { t } = useTranslation();

    return (
        <BottomTabs.Navigator
            initialRouteName="Dashboard"
            screenOptions={{ headerShown: false }}
        >
            {bottomTabs.map((tab) => (
                <BottomTabs.Screen
                    key={tab.name}
                    name={tab.name as keyof TAppStackParamsList}
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
                        headerBackground: () => <View style={styles.background} />,
                        headerTintColor: themeColors.ivory,
                    }}
                />
            ))}
        </BottomTabs.Navigator>
    );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: themeColors.darkBlue,
    },
});
