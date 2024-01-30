import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './BottomTabsNavigator';

export type TAppStackParamsList = {
  BottomTabsNavigator: undefined;
  Dashboard: undefined;
  Games: undefined;
  League: undefined;
  Players: undefined;
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
