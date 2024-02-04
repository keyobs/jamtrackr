import {
    Text,
    View,
    FlatList,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

import { themeColors } from '@theme/colors';
import { TPlayer } from '@store/playersStore';

const PlayersList = ({ playersList }) => {
    return (
        <FlatList
            data={playersList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <PlayerItem player={item} />}
        />
    );
};
export default PlayersList;

type TPlayerItem = {
  player: TPlayer;
  containerStyle?: StyleProp<ViewStyle>;
  nameStyle?: StyleProp<TextStyle>;
  numberStyle?: StyleProp<TextStyle>;
};
export const PlayerItem = (props: TPlayerItem) => {
    const { player } = props;

    const styles: Record<string, StyleProp<ViewStyle | TextStyle>> = {
        containerStyle: [
            {
                flexDirection: 'row',
                alignItems: 'center',
                height: 48,
                borderBottomWidth: 0.2,
                borderBottomColor: themeColors.ivory,
            },
            props.containerStyle,
        ],
        numberStyle: [
            {
                textAlign: 'right',
                width: 40,
                marginRight: 10,
                color: themeColors.ivory,
            },
            props.numberStyle,
        ],
        nameStyle: [
            {
                color: themeColors.ivory,
            },
            props.nameStyle,
        ],
    };

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.numberStyle}>{player.number}</Text>
            <Text style={styles.nameStyle}>{player.name}</Text>
        </View>
    );
};
