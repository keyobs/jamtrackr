import { MutableRefObject, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    TextInput,
    View,
    StyleProp,
    Text,
    TextStyle,
    ViewStyle,
    StyleSheet,
} from 'react-native';

import { themeColors } from '@theme/colors';
import { Button } from '@rneui/themed';

import { InputLight } from '@components/inputs/InputLight';
import { TTeam } from '@store/teamsStore';

type TCreateTeamForm = {
  teamsFormRef: MutableRefObject<TextInput | null>;
  onCreate: (value: TTeam) => void;
};
const CreateTeamForm = ({ teamsFormRef, onCreate }: TCreateTeamForm) => {
    const { t } = useTranslation();

    const initialTeam = {
        name: '',
        players: [],
    };

    const [team, setTeam] = useState<TTeam>(initialTeam);

    const handleCreate = () => {
        onCreate(team);
        setTeam(initialTeam);
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>{t('teams_form_title')}</Text>
            <View style={styles.inputContainer}>
                <InputLight
                    label={t('teams_form_name_label')}
                    placeholder={t('teams_form_name_placeholder')}
                    forwardedRef={teamsFormRef}
                    value={team.name}
                    onChangeText={(value) => setTeam({ ...team, name: value })}
                    containerStyle={{
                        maxWidth: 330,
                    }}
                />
                <Button
                    title={t('teams_form_submit_button_label')}
                    containerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                    }}
                    buttonStyle={{
                        height: 45,
                        borderRadius: 5,
                        backgroundColor: themeColors.pink,
                    }}
                    onPress={() => handleCreate()}
                ></Button>
            </View>
        </View>
    );
};

export default CreateTeamForm;

const styles: Record<
  string,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
    formContainer: {
        marginVertical: 10,
    },
    formTitle: {
        color: themeColors.ivory,
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
});
