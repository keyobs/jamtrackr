import {
    Text,
    View,
    TouchableHighlight,
    StyleProp,
    TextStyle,
    ViewStyle,
    StyleSheet,
} from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { themeColors } from '@theme/colors';
import { Button } from '@rneui/base';
import { TTeam } from '@store/teamsStore';

const TeamsButtonsGroup = ({ teamsList }: { teamsList: TTeam[] }) => {
    return (
        <View style={styles.groupContainer}>
            {teamsList.length > 0 &&
        teamsList.map((team) => (
            <TouchableHighlight key={team.name} style={styles.buttonContainer}>
                <View>
                    <Text numberOfLines={2} ellipsizeMode="tail">
                        {team.name}
                    </Text>
                </View>
            </TouchableHighlight>
        ))}
            <Button
                onPress={() => alert('add a team')}
                containerStyle={{
                    borderRadius: 5,
                }}
                buttonStyle={{
                    width: 60,
                    height: 60,
                    backgroundColor: themeColors.ivory,
                }}
                iconContainerStyle={{
                    backgroundColor: themeColors.ivory,
                }}
                icon={
                    <MaterialCommunityIcons
                        name="plus"
                        size={20}
                        color={themeColors.darkBlue}
                    />
                }
            />
        </View>
    );
};

export default TeamsButtonsGroup;

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    groupContainer: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        rowGap: 10,
        columnGap: 10,
        alignContent: 'space-around',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: '30%',
        maxWidth: '32%',
        height: 60,
        backgroundColor: themeColors.ivory,
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        flexGrow: 1,
    },
});
