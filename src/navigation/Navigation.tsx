import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './BottomTabsNavigator';
import { appRoutes } from './appRoutes';

export type TAppStackParamsList = {
  navigate(route: appRoutes): void;
  BottomTabsNavigator: undefined;
  Dashboard: undefined;
  Games: undefined;
  League: undefined;
  Players: undefined;
  Teams: undefined;
  Search: undefined; // {query: string}
  Account: undefined;
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <BottomTabsNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
