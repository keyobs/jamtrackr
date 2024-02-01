import {
    Text,
    StyleSheet,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

import { themeColors } from '@theme/colors';
import { Card } from '@rneui/base';

type TTeamCard = { teamName: string };
const TeamCard = ({ teamName }: TTeamCard) => {
    return (
        <Card
            containerStyle={{
                borderRadius: 15,
                height: 60,
                paddingHorizontal: 20,
                backgroundColor: themeColors.ivory,
                alignContent: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={styles.teamTitle}>{teamName}</Text>
        </Card>
    );
};

export default TeamCard;

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    teamTitle: {
        color: themeColors.darkBlue,
        fontSize: 15,
        fontWeight: 'bold',
    },
});
