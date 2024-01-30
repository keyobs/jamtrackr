import {
    Text,
    StyleSheet,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import { themeColors } from '@theme/colors';
import { TAppStackParamsList } from '@navigation/Navigation';
import { appRoutes } from '@navigation/appRoutes';

import { WideButtonWithIcon } from '@components/buttons/WideButtonWithIcon';

const LeagueScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<TAppStackParamsList>();

    return (
        <View style={styles.container}>
            <View style={[styles.section, styles.teams]}>
                <View style={styles.sectionTitle}>
                    <Text style={styles.sectionTitleText}>{t('league_teams_title')}</Text>
                </View>

                <WideButtonWithIcon
                    label={t('league_teams_add_button_label')}
                    preset="chevron-next"
                    onPressAction={() => console.log('manage teams')}
                />
            </View>

            <View style={[styles.section, styles.players]}>
                <View style={styles.sectionTitle}>
                    <Text style={styles.sectionTitleText}>
                        {t('league_players_title')}
                    </Text>
                </View>

                <WideButtonWithIcon
                    label={t('league_players_manage_button_label')}
                    preset="chevron-next"
                    onPressAction={() => navigation.navigate(appRoutes.PLAYERS)}
                />
            </View>
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
        backgroundColor: themeColors.darkBlue,
    },

    section: {
        maxHeight: '50%',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 20,
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
