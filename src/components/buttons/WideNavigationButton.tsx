import { ComponentProps } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
    Text,
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableHighlight,
    View,
} from 'react-native';
import { themeColors } from '@theme/colors';

type TWideButtonWithIcon = {
  label: string;
  direction?: 'next' | 'back';
  onPressAction: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconColor?: string;
};

type TNavigationIcon = {
  [key in TWideButtonWithIcon['direction']]: {
    name: ComponentProps<typeof MaterialCommunityIcons>['name'];
    type: 'material-community';
  };
};

const navigationIcon: TNavigationIcon = {
    next: {
        name: 'chevron-right',
        type: 'material-community',
    },
    back: {
        name: 'chevron-left',
        type: 'material-community',
    },
};

export const WideNavigationButton = (props: TWideButtonWithIcon) => {
    const { label, direction, onPressAction } = props;

    const styles: Record<string, StyleProp<ViewStyle | TextStyle>> = {
        container: [
            {
                width: '100%',
                height: 50,
                marginVertical: 10,
                paddingHorizontal: 20,
                justifyContent: 'center',
                backgroundColor: 'rgba(43, 131, 166, 0.4)',
            },
            props.containerStyle,
        ],
        buttonContainer: [
            {
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
            props.buttonContainerStyle,
        ],
        text: [
            {
                color: themeColors.ivory,
                fontSize: 15,
            },
            props.textStyle,
        ],
    };

    return (
        <TouchableHighlight
            style={styles.container}
            activeOpacity={0.8}
            underlayColor={'#267392'}
            onPress={() => onPressAction()}
        >
            <View style={styles.buttonContainer}>
                <Text style={styles.text}>{label}</Text>
                <MaterialCommunityIcons
                    name={navigationIcon[direction].name}
                    color={props.iconColor || themeColors.ivory}
                    size={28}
                />
            </View>
        </TouchableHighlight>
    );
};
