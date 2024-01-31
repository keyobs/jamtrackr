import {
    Text,
    StyleSheet,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';
import { themeColors } from '@theme/colors';
import { useRef, useState } from 'react';
import { InputLight } from '@components/inputs/InputLigth';

type TPlayer = {
  name: string;
  number: string;
  role: 'blocker' | 'jammer' | 'pivot';
  team: string;
};

const PlayersScreen = () => {
    const refs = {
        nameRef: useRef(null),
        numberRef: useRef(null),
        roleRef: useRef(null),
        teamRef: useRef(null),
    };

    const [playerForm, setPlayerForm] = useState<TPlayer>({
        name: '',
        number: '',
        role: null,
        team: '',
    });

    console.log(playerForm);

    return (
        <View style={styles.container}>
            <View style={[styles.section, styles.playersList]}>
                <Text style={styles.listTitle}>Liste</Text>
                <Text>number name team</Text>
                <Text></Text>
            </View>

            <View style={styles.section}>
                <Text>Create a new player</Text>

                <InputLight
                    forwardedRef={refs.nameRef}
                    label="Name"
                    value={playerForm.name}
                    onChangeText={(value) =>
                        setPlayerForm({ ...playerForm, name: value })
                    }
                />

                <InputLight
                    forwardedRef={refs.numberRef}
                    label="Number"
                    value={playerForm.number}
                    onChangeText={(value) =>
                        setPlayerForm({ ...playerForm, number: value })
                    }
                />
                <Text>role</Text>
                <Text>team</Text>
            </View>
        </View>
    );
};

export default PlayersScreen;

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.darkBlue,
        paddingTop: 15,
    },
    section: {
        flex: 2,
    },
    playersList: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: themeColors.ivory,
        borderBottomColor: themeColors.ivory,
    },
    listTitle: {
        color: themeColors.ivory,
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderBottomColor: themeColors.ivory,
        borderBottomWidth: 1,
    },
});
