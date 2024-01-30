import {
    Text,
    StyleSheet,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { Button } from '@rneui/themed';

import { WideButtonWithIcon } from '@components/buttons/WideButtonWithIcon';

const LeagueScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={[styles.section, styles.teams]}>
                <View style={styles.sectionTitle}>
                    <Text style={styles.sectionTitleText}>{t('league_teams_title')}</Text>
                </View>

                <Button onPress={() => console.log('pressed')} style={styles.pressable}>
                    <Text>{t('league_teams_add_button_label')}</Text>
                </Button>
            </View>

            <View style={[styles.section, styles.players]}>
                <View style={styles.sectionTitle}>
                    <Text style={styles.sectionTitleText}>
                        {t('league_players_title')}
                    </Text>
                </View>

                <Button onPress={() => console.log('pressed')}>
                    <Text>{t('league_players_manage_button_label')}</Text>
                </Button>
            </View>
            <WideButtonWithIcon
                label={t('league_players_manage_button_label')}
                preset="chevron-next"
                onPressAction={() => console.log('manage players')}
            />
        </View>
    );
};

export default LeagueScreen;

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    container: {
        flex: 1,
    },

    section: {
        maxHeight: '50%',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        height: 50,
        justifyContent: 'center',
    },

    sectionTitleText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    teams: {
        marginBottom: 40,
    },

    players: {},

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
