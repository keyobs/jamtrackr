import { Text, StyleProp, TextStyle, ViewStyle, View } from 'react-native';
import { themeColors } from '@theme/colors';
import { Icon, Button } from '@rneui/base';

type TTeamCard = {
  teamName: string;
  onEdit?: () => void;
  onDelete?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  iconColor?: string;
};

const TeamCard = (props: TTeamCard) => {
    const { teamName, onEdit, onDelete } = props;

    const styles: Record<string, StyleProp<ViewStyle | TextStyle>> = {
        containerStyle: [
            {
                height: 55,
                paddingLeft: 20,
                paddingRight: 10,
                backgroundColor: themeColors.hardDarkBlue,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 1,
            },
            props.containerStyle,
        ],
        teamTitle: [
            {
                color: themeColors.ivory,
                fontSize: 15,
                justifyContent: 'center',
                alignContent: 'center',
            },
            props.titleStyle,
        ],
    };

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.teamTitle}>{teamName}</Text>

            <View style={{ flexDirection: 'row', columnGap: 10 }}>
                <Button
                    type="clear"
                    onPress={onDelete}
                    icon={
                        <Icon
                            type="ant-design"
                            name="delete"
                            color={props.iconColor || themeColors.ivory}
                            size={20}
                        />
                    }
                />
                <Button
                    type="clear"
                    onPress={onEdit}
                    icon={
                        <Icon
                            type="feather"
                            name="edit-2"
                            color={props.iconColor || themeColors.ivory}
                            size={25}
                        />
                    }
                />
            </View>
        </View>
    );
};

export default TeamCard;
