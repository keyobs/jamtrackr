import {
    Text,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
    StyleSheet,
} from 'react-native';
import { useState } from 'react';

import { TTeam } from '@store/teamsStore';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { themeColors } from '@theme/colors';
import { Button } from '@rneui/base';

// TODO = modify selectedTeams by array of ids (waitingBackEnd)

const TeamsButtonsGroup = ({
    teamsList,
    onSelectTeam,
}: {
  teamsList: TTeam[];
  onSelectTeam: (team: TTeam) => void;
}) => {
    const [selectedTeams, setSelectedTeams] = useState<string[]>([]);

    const isTeamSelected = (teamId: string) =>
        selectedTeams.some((t) => t === teamId);

    const handleButtonClick = (team: TTeam) => {
        setSelectedTeams(
            isTeamSelected(team.name)
                ? selectedTeams.filter((t) => t !== team.name)
                : [...selectedTeams, team.name],
        );
        onSelectTeam(team);
    };

    const TeamButton = ({ team }) => {
        return (
            <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                    color: isTeamSelected(team.name)
                        ? themeColors.ivory
                        : themeColors.darkBlue,
                }}
            >
                {' '}
                {team.name}
            </Text>
        );
    };

    return (
        <View style={styles.groupContainer}>
            {teamsList.length > 0 &&
        teamsList.map((team) => (
            <Button
                key={team.name}
                title={<TeamButton team={team} />}
                onPress={() => handleButtonClick(team)}
                containerStyle={{
                    borderRadius: 5,
                    width: '30%',
                    height: 60,
                }}
                buttonStyle={{
                    height: '100%',
                    backgroundColor: isTeamSelected(team.name)
                        ? themeColors.lightSeaGreen
                        : themeColors.ivory,
                }}
            />
        ))}

            <Button
                onPress={() => alert('add a team')}
                buttonStyle={{
                    width: 60,
                    height: 60,
                    backgroundColor: themeColors.ivory,
                    borderRadius: 5,
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
        alignItems: 'center',
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
