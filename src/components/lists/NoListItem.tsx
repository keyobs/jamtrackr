import { Text, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Icon } from '@rneui/base';
import { themeColors } from '@theme/colors';

type TNoListItem = {
  disclaimerText: string;
  iconSize?: number;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
const NoListItem = (props: TNoListItem) => {
    const { disclaimerText, iconSize } = props;

    const styles: Record<string, StyleProp<ViewStyle | TextStyle>> = {
        container: [
            {
                alignItems: 'center',
                paddingVertical: 10,
            },
            props.containerStyle,
        ],
        text: [
            {
                color: themeColors.ivory,
                paddingTop: 10,
            },
            props.textStyle,
        ],
    };

    return (
        <View style={styles.container}>
            <Icon
                type="material-community"
                name="kettle-steam-outline"
                color={themeColors.ivory}
                size={iconSize || 120}
            />
            <Text style={styles.text}>
                {disclaimerText || 'generic_no_item_disclaimer'}
            </Text>
        </View>
    );
};
export default NoListItem;
