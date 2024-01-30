import { ComponentProps } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableHighlight,
    View,
} from 'react-native';
import { themeColors } from '@theme/colors';

type TWideButtonWithIcon = {
  label: string;
  preset: 'chevron-next' | 'chevron-back';
  onPressAction: () => void;
};

type TIconPreset = {
  [key in TWideButtonWithIcon['preset']]: {
    name: ComponentProps<typeof MaterialCommunityIcons>['name'];
    type: 'material-community';
  };
};

const iconPreset: TIconPreset = {
    'chevron-next': {
        name: 'chevron-right',
        type: 'material-community',
    },
    'chevron-back': {
        name: 'chevron-left',
        type: 'material-community',
    },
};

export const WideButtonWithIcon = (props: TWideButtonWithIcon) => {
    const { label, preset, onPressAction } = props;

    return (
        <TouchableHighlight
            style={styles.container}
            activeOpacity={0.8}
            underlayColor={themeColors.teal}
            onPress={() => onPressAction()}
        >
            <View style={styles.buttonContainer}>
                <Text style={styles.text}>{label}</Text>
                {preset && (
                    <MaterialCommunityIcons
                        name={iconPreset[preset].name}
                        color={themeColors.darkBlue}
                        size={28}
                    />
                )}
            </View>
        </TouchableHighlight>
    );
};

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: themeColors.lightSeaGreen,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: themeColors.hardDarkBlue,
        fontSize: 15,
    },
    icon: {
        color: themeColors.darkBlue,
    },
});
